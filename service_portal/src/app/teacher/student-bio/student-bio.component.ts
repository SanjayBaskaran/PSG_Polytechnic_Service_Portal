import { StudentDetailsComponent } from './student-details/student-details.component';
import { DomSanitizer } from '@angular/platform-browser';
import { UserDataService } from 'src/app/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentStudentService } from 'src/app/current-student.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-bio',
  templateUrl: './student-bio.component.html',
  styleUrls: ['./student-bio.component.scss'],
})
export class StudentBioComponent implements OnInit {
  students: any;
  restructuredStudents: any;
  //dept: any;
  image: Array<any> = [];
  loading: boolean = true;
  studentX:any;
  constructor(
    private userdata: UserDataService,
    private router: Router,
    private currStudent: CurrentStudentService,
    private domsanitizer: DomSanitizer,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.userdata.studentBio().subscribe(
      (data: any) => {
        this.students = data;
        this.restructuredStudents = {};
        this.studentX = {};
        data.forEach((element:any) => {
          if (!this.restructuredStudents[element.dept_id]) {
            this.restructuredStudents[element.dept_id] = {};
            this.studentX[element.dept_id] = {};
          }
          if (!this.restructuredStudents[element.dept_id][element.programme_name]) {
            this.restructuredStudents[element.dept_id][element.programme_name] = {};
            this.studentX[element.dept_id][element.programme_name] = {};
          }
          if (!this.restructuredStudents[element.dept_id][element.programme_name][element.batch_id]) {
            this.restructuredStudents[element.dept_id][element.programme_name][element.batch_id] = [];
            this.studentX[element.dept_id][element.programme_name][element.batch_id] = [];
          }
          let TYPED_ARRAY = new Uint8Array(element.photo.data);
          const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
            return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          element.imageX = this.domsanitizer.bypassSecurityTrustUrl(
            'data:image/jpg;base64, ' + base64String
          );
          this.restructuredStudents[element.dept_id][element.programme_name][
            element.batch_id
          ].push(element);
        });
        console.log(this.restructuredStudents);
        this.studentX = this.restructuredStudents;
        let datax = Object.keys(this.restructuredStudents).map((keydept, indexdept) => {
          return {
            dept: keydept,
            data: Object.keys(this.restructuredStudents[keydept]).map(
              (keyprogramme, indexprogramme) => {
                return {
                  program: keyprogramme,
                  data: Object.keys(this.restructuredStudents[keydept][keyprogramme]).map(
                    (keybatch, indexbatch) => {
                      return {
                        batch: keybatch,
                        data: this.restructuredStudents[keydept][keyprogramme][keybatch],
                      };
                    }
                  ),
                };
              }
            ),
          };
        });
        this.restructuredStudents = datax;
        console.log(datax);
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  studentBio(dept:string,programme:string,batch:string,index:number) {
    console.log(this.studentX[dept][programme][batch][index]);
    this.currStudent.student = this.studentX[dept][programme][batch][index];
    this.dialog.open(StudentDetailsComponent,{
      height: '600px',
      width: '600px',
    });
  }
}

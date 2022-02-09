import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.scss'],
})
export class StudComponent implements OnInit {
  studentInfo: any;
  restructuredStudents:any;
  image: Array<any> = [];
  constructor(
    private admindata: AdminService,
    private router: Router,
    private domsanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.admindata.student().subscribe(
      (data: any) => {
        this.studentInfo = data;
        for (let i = 0; i < this.studentInfo.length; i++) {
          let TYPED_ARRAY = new Uint8Array(data[i].photo.data);
          const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
            return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          this.image[i] = this.domsanitizer.bypassSecurityTrustUrl(
            'data:image/jpg;base64, ' + base64String
          );
        }
        console.log(data);
        this.restructuredStudents = {};
        data.forEach((element:any) => {
          if (!this.restructuredStudents[element.dept_id]) {
            this.restructuredStudents[element.dept_id] = {};
          }
          if (!this.restructuredStudents[element.dept_id][element.programme_name]) {
            this.restructuredStudents[element.dept_id][element.programme_name] = {};
          }
          if (!this.restructuredStudents[element.dept_id][element.programme_name][element.batch_id]) {
            this.restructuredStudents[element.dept_id][element.programme_name][element.batch_id] = [];
          }
          this.restructuredStudents[element.dept_id][element.programme_name][element.batch_id].push(element);
        });
        console.log(this.restructuredStudents);
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
      },
      (err) => {
        this.router.navigate(['adminLogin']);
      }
    );
  }
}

import { DomSanitizer } from '@angular/platform-browser';
import { UserDataService } from 'src/app/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentStudentService } from 'src/app/current-student.service';

@Component({
  selector: 'app-student-bio',
  templateUrl: './student-bio.component.html',
  styleUrls: ['./student-bio.component.scss']
})
export class StudentBioComponent implements OnInit {
  students:any;
  image:Array<any>=[];
  constructor(private userdata:UserDataService,private router:Router, private currStudent:CurrentStudentService,private domsanitize:DomSanitizer) { }

  ngOnInit(): void {
    this.userdata.studentBio().subscribe(
      (data:any)=>{
        this.students=data;
        for (let i = 0; i < this.students.length; i++) {
          let TYPED_ARRAY = new Uint8Array(data[i].photo.data);
          const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
            return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          this.image[i] = this.domsanitize.bypassSecurityTrustUrl(
            'data:image/jpg;base64, ' + base64String
          );
        }
      },
      err=>{
        console.log(err);
      }
    );
  }
  studentBio(index:number){
    console.log(this.students[index]);
    this.currStudent.student=this.students[index];
    this.router.navigate(["teacher/studentdetails"]);
  }
}

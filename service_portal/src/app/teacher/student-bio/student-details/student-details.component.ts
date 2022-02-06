import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CurrentStudentService } from 'src/app/current-student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  studentBio:any;
  image:any;
  constructor(private domsanitizer:DomSanitizer, private currStudent:CurrentStudentService,private router:Router) { }

  ngOnInit(): void {

      this.studentBio=this.currStudent.student;
      console.log("TEST");
      console.log(this.studentBio);
      let TYPED_ARRAY = new Uint8Array(this.studentBio.photo.data);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          this.image = this.domsanitizer.bypassSecurityTrustUrl("data:image/jpg;base64, " + base64String);
  }
  back(){
    this.router.navigate(["teacher","studentbio"]);
  }
}

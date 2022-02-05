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
  studentId:any;
  constructor(private userdata:UserDataService,private router:Router, private currStudent:CurrentStudentService) { }

  ngOnInit(): void {
    this.userdata.studentBio().subscribe(
      data=>{
        this.studentId=data;
      },
      err=>{
        console.log(err);
      }
    );
  }
  studentBio(index:number){
    console.log(this.studentId[index]);
    this.currStudent.student=this.studentId[index];
    this.router.navigate(["teacher/studentdetails"]);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {
  @ViewChild('f') form!:NgForm;
  constructor(private userData:UserDataService,private router:Router) { }

  ngOnInit(): void {
    this.userData.authCheckTeacher().subscribe(
      data=>{
        this.router.navigate(["/teacher"]);
      },err=>{
        console.log();
      }
    );
  }
  login(){
    this.userData.teacherLogin({staff_id:this.form.value.staff_id,password:this.form.value.password}).subscribe(
      (data:any)=>{
        localStorage.setItem("token",data.token);
        this.router.navigate(["teacher"]);
      },
      err=>{
        alert("Invalid username or password");
      }
    );

  }
  onSubmit(){
    this.login();
  }

}

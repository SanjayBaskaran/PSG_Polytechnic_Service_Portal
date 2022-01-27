import { UserDataService } from './../../user-data.service';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss'],
  providers:[UserDataService]
})
export class StudentLoginComponent implements OnInit ,OnDestroy,OnChanges{
  @ViewChild("f") form:any;
  constructor(private userData:UserDataService,private router:Router,) {
  }

  ngOnInit(): void {
    if(!!this.userData.getToken()){
      this.router.navigate(["student"]);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnDestroy(): void {

  }
  login(){
    this.userData.login({rno:this.form.value.username,password:this.form.value.password}).subscribe(
      (data:any)=>{
        localStorage.setItem("token",data.token);
        this.router.navigate(["student"]);
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

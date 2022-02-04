import { UserDataService } from './../user-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  @ViewChild("f") form:any;
  constructor(private userData:UserDataService,private router:Router,) {
  }

  ngOnInit(): void {
    this.userData.authCheckAdmin().subscribe(
      data=>{
        this.router.navigate(["/admin"]);
      },err=>{
        console.log(err);
      }
    );
  }

  login(){
    this.userData.adminLogin({username:this.form.value.username,password:this.form.value.password}).subscribe(
      (data:any)=>{
        console.log("Admin");
        localStorage.setItem("token",data.token);
        this.router.navigate(["admin"]);
      },
      err=>{
        alert("Invalid username or password");
      }
    );

  }
  onSubmit(){
    console.log("Admin Login");
    this.login();
  }
}

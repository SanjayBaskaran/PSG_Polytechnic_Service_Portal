import { UserDataService } from './../../user-data.service';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss'],
  providers:[UserDataService]
})
export class StudentLoginComponent implements OnInit ,OnDestroy,OnChanges{
  @ViewChild("f") form:any;
  validCheck:boolean = true;
  constructor(private getdata:UserDataService,private router:Router,) {
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnDestroy(): void {

  }
  onSubmit(){
    console.log("TEST");
    this.getdata.getStudent({rno:this.form.value.username,password:this.form.value.password}).subscribe(
      (data:any)=>{
          console.log(data);
          localStorage.setItem("token",data.token);
          this.getdata.isAuth = true;
          this.router.navigate(['student']);
    },
    (error)=>{
      this.validCheck = false;
      console.log(error);
    }
    );
  }
}

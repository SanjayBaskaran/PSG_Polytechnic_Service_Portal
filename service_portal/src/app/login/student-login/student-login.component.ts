import { StudentDataService } from './../../student-data.service';
import { UserDataService } from './../../user-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss'],
  providers:[UserDataService]
})
export class StudentLoginComponent implements OnInit {
  @ViewChild("f") form:any;
  validCheck:boolean = true;
  constructor(private getdata:UserDataService,private router:Router,private studentData:StudentDataService) {
  }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.form);
    this.getdata.getStudent({rno:this.form.value.username,password:this.form.value.password}).subscribe(
      (datax:any)=>{
        this.getdata.verifyToken().subscribe(
          (data)=>{
            console.log(data);
            this.studentData.studentbio = data;
            localStorage.setItem("token",JSON.stringify(datax.token));
            console.log("TEST",data);
            this.router.navigate(['student']);
          }
        );

    },
    (error)=>{
      this.validCheck = false;
      console.log(error);
    }
    );
  }
}

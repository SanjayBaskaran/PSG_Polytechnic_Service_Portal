import { Student } from './../../Student';
import { UserDataService } from './../../user-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit,OnDestroy {
  studentbio:any;
  // { "rno": string, "stud_name": string, "gender": string, "dob": string, "stud_address": string, "stud_pass": string, "photo":Blob,"stud_mobile":number,"stud_email":string,"father_name":string,"mother_name":string,"year_of_joining":number,"year_of_passing":number,"batch_id":string,"dept_id":string,"programme_name":string};
  userDatafetcher:any;
  constructor(private userData:UserDataService,private router:Router) {
    this.studentbio = {"rno": "", "stud_name": "", "gender": "", "dob": "", "stud_address": "", "stud_pass": "", "photo":new Blob(),"stud_mobile":0,"stud_email":"","father_name":"","mother_name":"","year_of_joining":0,"year_of_passing":0,"batch_id":"","dept_id":"","programme_name":""};
  }

  ngOnInit(): void {
    this.userDatafetcher = this.userData.verifyToken().subscribe((data)=>{
      // console.log(data);
      this.studentbio= data;
    },(error)=>{

      this.router.navigate(["/login"]);
    });
  }
  ngOnDestroy(): void {
    this.userDatafetcher.unsubscribe();
  }
}

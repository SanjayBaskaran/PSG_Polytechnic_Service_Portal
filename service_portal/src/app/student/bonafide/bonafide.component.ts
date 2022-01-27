import { UserDataService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bonafide',
  templateUrl: './bonafide.component.html',
  styleUrls: ['./bonafide.component.scss']
})
export class BonafideComponent implements OnInit {
  studentbio:any;
  constructor(private userData:UserDataService,private router:Router) {
    this.studentbio = {"rno": "", "stud_name": "", "gender": "", "dob": "", "stud_address": "", "stud_pass": "", "photo":new Blob(),"stud_mobile":0,"stud_email":"","father_name":"","mother_name":"","year_of_joining":0,"year_of_passing":0,"batch_id":"","dept_id":"","programme_name":""};
   }

  ngOnInit(): void {
    this.userData.authCheck().subscribe(
      data=>{
        this.studentbio = data;
      },
      err=>{
        this.router.navigate(["/login"]);
      }
    );
  }
}

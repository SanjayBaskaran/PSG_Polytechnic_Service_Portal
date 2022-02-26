import { UserDataService } from './../../user-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit,OnDestroy {
  studentbio:any;
  image:any;
  loading:boolean=true;
  userDatafetcher:any;
  constructor(private userData:UserDataService,private router:Router,private domsantizer:DomSanitizer) {
    this.studentbio = {"rno": "", "stud_name": "", "gender": "", "dob": "", "stud_address": "", "stud_pass": "", "photo":new Blob(),"stud_mobile":0,"stud_email":"","father_name":"","mother_name":"","year_of_joining":0,"year_of_passing":0,"batch_id":"","dept_id":"","programme_name":""};
  }

  ngOnInit(): void {
    this.userData.authCheck().subscribe(
      (data:any)=>{
        this.studentbio = data;
        console.log(this.studentbio);
        let TYPED_ARRAY = new Uint8Array(data.photo.data);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          this.image = this.domsantizer.bypassSecurityTrustUrl("data:image/jpg;base64, " + base64String);
          this.loading=false;
      },
      error=>{
        this.router.navigate(["/login"]); 
      }
    );
  }
  ngOnDestroy(): void {

  }
}

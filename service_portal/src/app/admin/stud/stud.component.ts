import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.scss']
})
export class StudComponent implements OnInit {
  studentInfo:any;
  image:any;
  constructor(private admindata:AdminService,private router:Router, private domsanitizer:DomSanitizer) { 
    this.studentInfo = {"rno": "", "stud_name": "", "gender": "", "dob": "", "stud_address": "", "stud_pass": "", "photo":new Blob(),"stud_mobile":0,"stud_email":"","father_name":"","mother_name":"","year_of_joining":0,"year_of_passing":0,"batch_id":"","dept_id":"","programme_name":""};
  }

  ngOnInit(): void {
    this.admindata.student().subscribe(
      (data:any)=>{
        this.studentInfo=data;
        let TYPED_ARRAY = new Uint8Array(data.photo.data);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          this.image = this.domsanitizer.bypassSecurityTrustUrl("data:image/jpg;base64, " + base64String);

        console.log(data);
      },(err)=>{
        this.router.navigate(['adminLogin']);
      }
    );
  }

}

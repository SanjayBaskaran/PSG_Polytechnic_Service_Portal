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
  image:Array<any>=[];
  constructor(private admindata:AdminService,private router:Router, private domsanitizer:DomSanitizer) { 
  }

  ngOnInit(): void {
    this.admindata.student().subscribe(
      (data:any)=>{
        this.studentInfo=data;
        for(let i=0;i<this.studentInfo.length;i++){
          let TYPED_ARRAY = new Uint8Array(data[i].photo.data);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          this.image[i] = this.domsanitizer.bypassSecurityTrustUrl("data:image/jpg;base64, " + base64String);
        }
        console.log(data);
      },(err)=>{
        this.router.navigate(['adminLogin']);
      }
    );
  }

}

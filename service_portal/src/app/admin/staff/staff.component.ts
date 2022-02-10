import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  teacherInfo:any;
  staff:any;

  constructor(private admindata:AdminService,private router:Router,private domsanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.admindata.teacher().subscribe(
      (data)=>{
        this.teacherInfo=data;
        this.staff = {};
        this.teacherInfo.forEach((element:any) => {
          if (!this.staff[element.dept_id]) {
            this.staff[element.dept_id] = [];
          }
          this.staff[element.dept_id].push(element);
        });
        this.teacherInfo = Object.keys(this.staff).map((key,index)=>{
          return {"dept":key,"data":this.staff[key]};
        });
        console.log(this.teacherInfo);
      },(err)=>{
        this.router.navigate(['adminLogin']);
      }
    );
  }

}

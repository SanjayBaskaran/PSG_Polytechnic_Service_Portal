import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
departmentInfo:any;
  constructor(private admindata:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.admindata.department().subscribe(
      (data)=>{
        this.departmentInfo=data;
        console.log(data);
      },(err)=>{
        this.router.navigate(['adminLogin']);
      }
    );
  }

}

import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private admindata:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.admindata.teacher().subscribe(
      (data)=>{
        console.log(data);
      },(err)=>{
        this.router.navigate(['adminLogin']);
      }
    );
  }

}

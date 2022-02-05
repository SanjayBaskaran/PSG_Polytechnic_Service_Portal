import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.scss']
})
export class StudComponent implements OnInit {

  constructor(private admindata:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.admindata.student().subscribe(
      (data)=>{
        console.log(data);
      },(err)=>{
        this.router.navigate(['adminLogin']);
      }
    );
  }

}

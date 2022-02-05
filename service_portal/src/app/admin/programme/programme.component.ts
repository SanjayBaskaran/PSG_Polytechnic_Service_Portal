import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {

  constructor(private admindata:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.admindata.programme().subscribe(
      (data)=>{
        console.log(data);
      },(err)=>{
        this.router.navigate(['adminLogin']);
      }
    );
  }

}

import { UserDataService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-nav',
  templateUrl: './teacher-nav.component.html',
  styleUrls: ['./teacher-nav.component.scss']
})
export class TeacherNavComponent implements OnInit {
  name!:string;
  constructor(private userData:UserDataService,private router:Router) { }
  logout(){
    this.userData.logout();
  }
  ngOnInit(): void {
    this.userData.authCheckTeacher().subscribe(
      (data:any)=>{
        this.name = data.staff_name;
      },err=>{
        this.router.navigate(['/login']);
      }
    );
  }

}

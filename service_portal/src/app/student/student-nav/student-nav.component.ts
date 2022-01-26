import { UserDataService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.scss']
})
export class StudentNavComponent implements OnInit {

  constructor(private userData:UserDataService,private router:Router) { }
  logout(){
    this.userData.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}

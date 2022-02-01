import { UserDataService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-nav',
  templateUrl: './teacher-nav.component.html',
  styleUrls: ['./teacher-nav.component.scss']
})
export class TeacherNavComponent implements OnInit {

  constructor(private userData:UserDataService) { }
  logout(){
    this.userData.logout();
  }
  ngOnInit(): void {
  }

}

import { UserDataService } from 'src/app/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  constructor(private userdata:UserDataService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.userdata.logout();
    this.router.navigate(['adminLogin']);
  }
}

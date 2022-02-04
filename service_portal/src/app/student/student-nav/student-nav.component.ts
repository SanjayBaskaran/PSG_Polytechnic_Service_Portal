import { DomSanitizer } from '@angular/platform-browser';
import { UserDataService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.scss',]
})
export class StudentNavComponent implements OnInit {
  image:any;
  name!:string;
  constructor(private userData:UserDataService,private router:Router,private domsantizer:DomSanitizer) { }
  logout(){
    this.userData.logout();
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
    this.userData.authCheck().subscribe((data:any)=>{
        let TYPED_ARRAY = new Uint8Array(data.photo.data);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          this.image = this.domsantizer.bypassSecurityTrustUrl("data:image/jpg;base64, " + base64String);
          this.name = data.stud_name;
    },(error)=>{
      this.logout();
    });
  }

}

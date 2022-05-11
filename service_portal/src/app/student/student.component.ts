import { UserDataService } from 'src/app/user-data.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angular2-qrcode';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  constructor(
    private userData: UserDataService,
    private router: Router,
    private domsantizer: DomSanitizer
  ) {}
  logout(){
    this.userData.logout();
    this.router.navigate(['login']);
  }
  image: any;
  name!: string;
  ngOnInit(): void {
    this.userData.authCheck().subscribe((data: any) => {
      let TYPED_ARRAY = new Uint8Array(data.photo.data);
      const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
        return data + String.fromCharCode(byte);
      }, '');
      let base64String = btoa(STRING_CHAR);
      this.image = this.domsantizer.bypassSecurityTrustUrl(
        'data:image/jpg;base64, ' + base64String
      );
      this.name = data.stud_name;
    });
  }
}

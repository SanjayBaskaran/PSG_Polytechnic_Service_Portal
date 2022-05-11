import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserDataService],
})
export class LoginComponent implements OnInit {
  constructor(private userData: UserDataService, private router: Router) {}
  @ViewChild('f') form: any;
  @ViewChild('f1') formx: any;
  loading: boolean = false;
  enableLogin: boolean = true;
  ngOnInit(): void {
    setInterval(() => {
      //console.log(!!this.userData.getToken());
      this.enableLogin = !!this.userData.getToken();
    }, 3000);
    this.userData.authCheck().subscribe(
      (data) => {
        this.router.navigate(['/student']);
      },
      (err) => {
        console.log();
      }
    );
    this.userData.authCheckTeacher().subscribe(
      (data) => {
        this.router.navigate(['/teacher']);
      },
      (err) => {
        console.log();
      }
    );
  }
  login() {
    this.userData
      .login({
        rno: this.form.value.username,
        password: this.form.value.password,
      })
      .subscribe(
        (data: any) => {
          localStorage.setItem('token', data.token);
          this.loading = false;
          this.router.navigate(['student']);
        },
        (err) => {
          alert('Invalid username or password');
          this.loading = false;
        }
      );
  }
  onSubmit() {
    this.loading = true;
    this.login();
  }

  Slogin(){
    console.log(this.formx,this.form);
    this.userData.teacherLogin({staff_id:this.formx.value.staff_id,password:this.formx.value.password}).subscribe(
      (data:any)=>{
        localStorage.setItem("token",data.token);
        this.loading=false;
        this.router.navigate(["teacher"]);
      },
      err=>{
        alert("Invalid username or password");
        this.loading=false;
      }
    );

  }
  onSubmit1(){
    this.loading=true;
    this.Slogin();
  }
}

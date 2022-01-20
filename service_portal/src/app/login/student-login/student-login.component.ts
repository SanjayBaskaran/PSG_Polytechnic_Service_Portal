import { AuthService } from './../../auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {
  @ViewChild("f") form:any;
  data:any;
  constructor(private auth:AuthService) {
  }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.form);
    this.data = this.auth.getUserData(this.form.value);
    console.log(this.data);
  }
}

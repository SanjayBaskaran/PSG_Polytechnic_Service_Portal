import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http:HttpClient,private router:Router) {}
  login(student:{rno:String,password:String}){
    return this.http.post("http://localhost:3000/api/login/student",student);
  }
  getToken(){
    return localStorage.getItem("token");
  }

  authCheck(){
    return this.http.get("http://localhost:3000/api/login/authCheck/student");
  }
  teacherLogin(teacher:{staff_id:String,password:String}){
    return this.http.post("http://localhost:3000/api/login/teacher",teacher);
  }
  authCheckTeacher(){
    return this.http.get("http://localhost:3000/api/login/authCheck/teacher");
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}

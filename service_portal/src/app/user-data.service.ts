import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  loading:boolean=false;
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
  adminLogin(admin:{username:String,password:String}){
    return this.http.post("http://localhost:3000/api/login/admin",admin);
  }
  authCheckTeacher(){
    return this.http.get("http://localhost:3000/api/login/authCheck/teacher");
  }
  authCheckAdmin(){
    return this.http.get("http://localhost:3000/api/login/authCheck/admin");
  }
  studentBio(){
    return this.http.get("http://localhost:3000/api/studentbio");
  }
  generateBonafide(rno:string){
    return this.http.post("http://localhost:3000/api/bonafide/generateBonafide",{rno:rno});
  }
  logout(){
    localStorage.removeItem("token");
  }
}

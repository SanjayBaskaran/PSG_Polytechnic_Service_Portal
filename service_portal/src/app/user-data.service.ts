import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  isAuth:any;
  constructor(private http:HttpClient) {
    this.isAuth = false;
   }

  getStudent(student:{rno:String,password:String}){
    //console.log(student);
    return this.http.post("http://localhost:3000/test",student);
  }

  verifyToken(){
    return this.http.get("http://localhost:3000/api/student");
  }
  authCheck(){
    return this.http.get("http://localhost:3000/api/authCheck").subscribe(
      (data)=>{
        console.log("True");
        return true;
      },
      (error)=>{
        console.log("False");
        return false;
      }
    );
  }
  logout(){
    localStorage.removeItem("token");
  }
}

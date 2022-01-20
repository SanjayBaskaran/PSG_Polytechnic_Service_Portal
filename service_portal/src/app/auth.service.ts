import { User } from './user.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  constructor(private http:HttpClient) { }
  getUserData(user:{username:string,password:string}){
    this.http.post<User>("localhost:3000/login",user).subscribe(
      data=>{
        return data;
      },
      error=>{
        return error;
      }

    );
  }
}

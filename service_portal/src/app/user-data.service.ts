import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getStudent(student:{rno:String,password:String}){
    //console.log(student);
    return this.http.post("http://localhost:3000/test",student);
  }
}

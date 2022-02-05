import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  student(){
    return this.http.get("http://localhost:3000/api/admin/student");
  }
  teacher(){
    return this.http.get("http://localhost:3000/api/admin/teacher");
  }
  department(){
    return this.http.get("http://localhost:3000/api/admin/department");
  }
  programme(){
    return this.http.get("http://localhost:3000/api/admin/programme");
  }
  batch(){
    return this.http.get("http://localhost:3000/api/admin/batch");
  }
  bonafide(){
    return this.http.get("http://localhost:3000/api/admin/bonafide");
  }
}

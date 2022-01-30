import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonafideService {

  constructor(private http:HttpClient) { }
  request(bonafideRequestData:any){
    return this.http.post('http://localhost:3000/api/bonafide/request',bonafideRequestData);
  }
}

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
  responses(rno:any){
    return this.http.post('http://localhost:3000/api/bonafide/responses',{"rno":rno});
  }
  pending(){
    return this.http.get('http://localhost:3000/api/bonafide/pending');

  }
  history(){
    return this.http.get('http://localhost:3000/api/bonafide/history');
  }
  accept(bonafideId:number,status:string){
    return this.http.post('http://localhost:3000/api/bonafide/accept',{bonafideId:bonafideId,status:status});
  }
  verify(bonafideId:string){
    return this.http.post('http://localhost:3000/api/verify',{bonafideId:+bonafideId});
  }
}

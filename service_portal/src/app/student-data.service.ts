import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  studentbio:any;
  constructor() { }
  getStudentBio(){
    return this.studentbio;
  }
}

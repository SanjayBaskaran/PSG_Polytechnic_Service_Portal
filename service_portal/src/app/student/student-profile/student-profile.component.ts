import { StudentDataService } from './../../student-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  studentbio:any;
  constructor(private student:StudentDataService) { }

  ngOnInit(): void {
    this.studentbio = this.student.getStudentBio();
    console.log(this.studentbio);
  }

}

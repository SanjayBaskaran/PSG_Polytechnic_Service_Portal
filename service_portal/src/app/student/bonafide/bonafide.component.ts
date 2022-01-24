import { Component, OnInit } from '@angular/core';
import { StudentDataService } from './../../student-data.service';
@Component({
  selector: 'app-bonafide',
  templateUrl: './bonafide.component.html',
  styleUrls: ['./bonafide.component.scss']
})
export class BonafideComponent implements OnInit {
  studentbio:any;
  constructor(private student:StudentDataService) { }

  ngOnInit(): void {
    this.studentbio = this.student.getStudentBio();
    //console.log(this.studentbio);
  }
}

import { UserDataService } from 'src/app/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-bio',
  templateUrl: './student-bio.component.html',
  styleUrls: ['./student-bio.component.scss']
})
export class StudentBioComponent implements OnInit {

  constructor(private userdata:UserDataService) { }

  ngOnInit(): void {
    this.userdata.studentBio().subscribe(
      data=>{
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    );
  }

}

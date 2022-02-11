import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BonafideService } from 'src/app/bonafide.service';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {
  studentBio:any;
  responses:any;
  loading:boolean=true;
  constructor(private userdata:UserDataService,private router:Router,private bonafide:BonafideService) { }

  ngOnInit(): void {
    this.userdata.authCheck().subscribe(
      (data:any)=>{
        this.studentBio=data;
        this.bonafide.responses(data.rno).subscribe(
          responses=>{
            this.responses=responses;
            this.loading=false;
           },
          err=>{
            alert("can't fetch responses");
          }
        )

        },
       (err)=>{
         this.router.navigate(["/login"])
         }
    )
  }
  generatePDF(bonafideId:number){

  }
}

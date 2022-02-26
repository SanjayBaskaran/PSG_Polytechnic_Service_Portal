import { BonafideService } from 'src/app/bonafide.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  bonafideId!:any;
  constructor(private bonafideservice:BonafideService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(data=>{
      console.log(data);
      this.bonafideId=data;
      this.bonafideservice.verify(this.bonafideId.bonafide_id).subscribe(data=>{
        console.log(data);
      });
    });
  }

}

import { DomSanitizer } from '@angular/platform-browser';
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
  details:any;
  image:any;
  constructor(private bonafideservice:BonafideService,private activatedroute:ActivatedRoute,private domsanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(datax=>{
      this.bonafideId=datax;
      this.bonafideservice.verify(this.bonafideId.bonafide_id).subscribe((data:any)=>{
        console.log(data.photo);
        this.details=data;
        console.log(this.details);
        let TYPED_ARRAY = new Uint8Array(data.photo.data);
        const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
          return data + String.fromCharCode(byte);
          }, '');
          let base64String = btoa(STRING_CHAR);
          this.image = this.domsanitizer.bypassSecurityTrustUrl("data:image/jpg;base64, " + base64String);
      });
    });
  }

}

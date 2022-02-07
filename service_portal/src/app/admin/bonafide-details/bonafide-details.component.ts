import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bonafide-details',
  templateUrl: './bonafide-details.component.html',
  styleUrls: ['./bonafide-details.component.scss']
})
export class BonafideDetailsComponent implements OnInit {
  bonafideInfo:any;

  constructor(private admindata:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.admindata.bonafide().subscribe(
      (data)=>{
        this.bonafideInfo=data;
        console.log(data);
      },(err)=>{
        this.router.navigate(['adminLogin']);
      }
    );
  }
}

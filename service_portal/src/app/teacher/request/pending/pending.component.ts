import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BonafideService } from 'src/app/bonafide.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  pendingRequests:any;
  loading:boolean=true;
  constructor(private bonafide:BonafideService,private router:Router) { }

  ngOnInit(): void {
    this.bonafide.pending().subscribe((data:any)=>{
      this.loading=false;
      this.pendingRequests=data;
      console.log(data);
    },err=>{
      this.router.navigate(['login/Teacher']);

    }


    )
  }

}

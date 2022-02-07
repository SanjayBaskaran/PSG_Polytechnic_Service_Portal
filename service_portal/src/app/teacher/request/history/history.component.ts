import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BonafideService } from 'src/app/bonafide.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyRequests:any;
  loading:boolean=true;
  constructor(private bonafide:BonafideService,private router:Router) { }

  ngOnInit(): void {
    this.bonafide.history().subscribe((data:any)=>{
    this.historyRequests=data;
    this.loading=false;
    console.log(data);
  },err=>{
    this.router.navigate(['login/Teacher']);

  }
  )
  }

}

import { BonafideService } from './../../bonafide.service';
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

  constructor(private admindata:AdminService,private router:Router,private bonafide:BonafideService) { }

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
  accept(bonafide_id:number,bonnafide_status:string){
    this.bonafide.accept(bonafide_id,bonnafide_status).subscribe((data)=>{
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentUrl]);
      });
    });
  }
}

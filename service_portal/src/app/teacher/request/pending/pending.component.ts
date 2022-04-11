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
  teacherDesign!:string;
  loading:boolean=true;
  constructor(private bonafide:BonafideService,private router:Router) { }

  ngOnInit(): void {
    this.bonafide.pending().subscribe((data:any)=>{
      this.loading=false;
      this.pendingRequests=data.result;
      this.teacherDesign = data.designation;
      console.log(data.designation);
    },err=>{
      this.router.navigate(['login/Teacher']);

    }


    )
  }
  acceptRequest(bonafide:any){
    if(this.teacherDesign[0]=='t'){
      this.bonafide.accept(bonafide.bonafide_id,'Y'+bonafide.status[1]+bonafide.status[2]).subscribe(
        (data:any)=>{
          console.log(data);
        },
        (err)=>{
          alert("Bonafide can't get updated");
        }
      );
    }else if(this.teacherDesign[0]=='h'){
      this.bonafide.accept(bonafide.bonafide_id,bonafide.status[1]+'Y'+bonafide.status[2]).subscribe(
        (data:any)=>{
          console.log(data);
        },
        (err)=>{
          alert("Bonafide can't get updated");
        }
      );
    }
  }
  rejectRequest(bonafide:any){

  }

}

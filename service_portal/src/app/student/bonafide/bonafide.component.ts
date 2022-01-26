import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bonafide',
  templateUrl: './bonafide.component.html',
  styleUrls: ['./bonafide.component.scss']
})
export class BonafideComponent implements OnInit {
  studentbio:any;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.studentbio);
  }
}

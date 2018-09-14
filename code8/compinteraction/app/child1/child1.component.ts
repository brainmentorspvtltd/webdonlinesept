import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  basicSalary:number;
  tax:number;
  message:string;
  @Output()
  recsalary:EventEmitter<Object> = new EventEmitter();
  constructor(private sharedService:SharedService) {
    this.tax = 0.10;
   }
  sendMessageToChild2(msg){
  this.sharedService.message=msg;
  }
  ngOnInit() {
  }
  computeTax(){
    return this.basicSalary * this.tax;
  }
  print():void{
    var taxableSalary = this.computeTax();
    var netSalary = this.basicSalary - taxableSalary;
    var salaryDetails = {bs:this.basicSalary, ts:taxableSalary,ns:netSalary};
    this.recsalary.emit(salaryDetails);
  }

}

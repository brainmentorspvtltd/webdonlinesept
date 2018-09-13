import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  basicSalary:number;
  tax:number;
  @Output()
  recsalary:EventEmitter<Object> = new EventEmitter();
  constructor() {
    this.tax = 0.10;
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

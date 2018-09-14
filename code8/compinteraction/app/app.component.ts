import { Component, ViewChild,ViewChildren,QueryList } from '@angular/core';
import {Child2Component} from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondapp';
  salary:number =0;
  salaryDetailObject:Object = {};
  @ViewChildren(Child2Component)
  childList:QueryList<Child2Component>;
  //@ViewChild(Child2Component)
  //child2Object:Child2Component;


 // storeSalary:number =0;
  /*takeSalary(event){
    //this.storeSalary = 0;
  this.salary = parseFloat(event.target.value);
  }*/
  changeAddress(newAddress){
    //this.child2Object.changeAddress(newAddress);  // single object change
    this.childList.forEach(currentChildObject=>{
      currentChildObject.changeAddress(newAddress);
    });

    //this.child2Object.address = newAddress;
  }
  printSalary(sal:string):void{
    this.salary = parseFloat(sal);
  }
  recSalaryDetails(salaryDetailObject){
  console.log('Rec Salary Details ',salaryDetailObject);
  this.salaryDetailObject  = salaryDetailObject;
  }
}

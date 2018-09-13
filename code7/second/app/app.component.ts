import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondapp';
  salary:number =0;
  salaryDetailObject:Object = {};

 // storeSalary:number =0;
  /*takeSalary(event){
    //this.storeSalary = 0;
  this.salary = parseFloat(event.target.value);
  }*/
  printSalary(sal:string):void{
    this.salary = parseFloat(sal);
  }
  recSalaryDetails(salaryDetailObject){
  console.log('Rec Salary Details ',salaryDetailObject);
  this.salaryDetailObject  = salaryDetailObject;
  }
}

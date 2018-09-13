import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  fruits:string[];
  price:number;
  object:Object;
  name:string;
  constructor() {
    this.name = "Amit";
    this.object = {id:1001,name:'Ram',salary:9999};
    this.price = 1000;
   this.fruits = ["APPLE","orange","banana","GRapes"];

  }

  ngOnInit() {
  }

}

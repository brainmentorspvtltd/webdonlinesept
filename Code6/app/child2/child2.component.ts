import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  fruits:string[];
  constructor() { 
   this.fruits = ["Apple","Orange","Banana","Grapes"];

  }

  ngOnInit() {
  }

}

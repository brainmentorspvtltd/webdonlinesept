import { Component, OnInit } from '@angular/core';
import {GreetService} from '../services/greet.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
  //providers:[GreetService]
})
export class GreetComponent implements OnInit {
  firstName:string;
  lastName:string;
  message:string;
  constructor(private greetService: GreetService) { }

  ngOnInit() {
  }
  takeFirstName(event){
    this.firstName = event.target.value;
  }
  takeLastName(event){
  this.lastName = event.target.value;
  }
  greet():void{
    this.message = this.greetService.initcap(this.firstName) + " "+this.greetService.initcap(this.lastName);
  }
  // initcap(str:string):string{
  //   return str.charAt(0).toUpperCase() +
  //    str.substring(1).toLowerCase();
  // }

}

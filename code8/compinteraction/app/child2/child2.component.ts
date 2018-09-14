import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  address:string;
  city:string;
  country:string;
  message:string;
  constructor(private sharedService:SharedService) {
    this.address = 'Shakti Nagar';
    this.city = 'Delhi';
    this.country = 'India';

   }
   changeAddress(address:string):void{
    this.address = address;
   }

  ngOnInit() {
  }
  recMessage():void{
  this.message = this.sharedService.message;
  }
  bringMessage(){
    this.recMessage();
  }

}

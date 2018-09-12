import {Injectable} from '@angular/core';
@Injectable()
export class GreetService{
    constructor(){

    }
     initcap(str:string):string{
        return str.charAt(0).toUpperCase() +
         str.substring(1).toLowerCase();
  }

}
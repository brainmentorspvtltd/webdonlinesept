import { Injectable } from "@angular/core";

@Injectable()
export class SharedService{
  private _message:string;
  constructor(){
    this.message = '';
  }
  set message(msg:string){
    this._message  = msg;
  }
  get message():string{
    return this._message;
  }

}

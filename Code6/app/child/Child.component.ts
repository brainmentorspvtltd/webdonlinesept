import { Component } from '@angular/core';
@Component({
    selector :'child-comp',
    templateUrl:'Child.component.html',
    styleUrls:['Child.component.css']
})

export class ChildComponent{
    message:string ;
    count:number;
    isHide:boolean;
    name:string;
    fullName:string;
    cssstyle:string;
    isDisabled:boolean;
    constructor(){
        this.isDisabled = false;
        this.cssstyle = "blue";
        this.fullName  = "";
        this.name = "Amit";
        this.isHide = true;
        this.count = 0;
        this.message = "Hello Child Component";
    }
    takeInput(event){
        this.fullName = event.target.value;
    }
    countDown():void{
        this.cssstyle = this.cssstyle=='red'?'blue':'red';
        this.count++;
        if(this.count>=5){
            this.isDisabled = true;
        }
        this.isHide = !this.isHide;
    }
}
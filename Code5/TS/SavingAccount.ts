import {Account} from './isa';
interface ROI{
    computeROI():void;
}
interface A1{
    output():void;
}
interface A2{
    output():void;
}
interface A3 extends A1, A2{

}
class SavingAccount extends Account implements ROI, A3{
    output() : void{
        console.log(" I am a OUtput Method");
    }
    computeROI():void{
        console.log("Override compute ROI from Interface");
    }
    constructor(){
        super();
        console.log("Saving Account Constructor");
    }
    print():void{
        super.print();
        console.log(" I am a SavingAccount Print...");
    }
}
//var ac:Account = new Account();
var sa:SavingAccount = new SavingAccount();

sa.print();
sa.computeROI();
sa.output();

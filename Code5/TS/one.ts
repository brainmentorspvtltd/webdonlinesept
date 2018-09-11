var a = 100;
var b:number = 100;
//b= "Ram";
var c:string="Amit";
var d:boolean = true;
var e:any = 100;
e = "ram";
e = true;
console.log("B is "+b+" d is "+d+" e is "+e);
var d1= [10,20,true, "amit"];
var ee:string[] = ["amit","ram"];
var tup:[string,number] = ["ram",21];
enum Color{
    RED=100, GREEN=200, BLUE=300
}
var colorValue:Color;
  if(10>20){  
     colorValue = Color.RED;
  }
    else{
        colorValue = Color.GREEN;
    }
switch(colorValue){
    case Color.RED:
        console.log("Red Color");
        break;
     case Color.GREEN:
         console.log("Green Color");
         break;   
}

function add(x:number, y:number):number{
    return x + y;
}
var result:number = add(100,200);
console.log("Result is ",result);

class Emp{
    private id:number; // Define
    //private name:string;

    constructor(id:number, private name:string,protected salary:number, public address:string){
        this.id = id; // Initalize
    }
     print():void{
         console.log(`Id is ${this.id} Name is ${this.name} Salary ${this.salary} and Address is ${this.address}`);
     }
}
    var ram:Emp = new Emp(1001,"Ram",9999,"Delhi");
    ram.print();
    console.log(" Emp is ",typeof(Emp));
    console.log("Ram is ",typeof(ram));

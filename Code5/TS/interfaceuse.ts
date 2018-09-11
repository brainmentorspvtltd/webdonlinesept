interface MyMethodSignature{
    (a:number,b:number):number;
}
function add(x:number, y:number):number{
    return x + y;
}
function show():void{
    console.log(" i am a Show ");
}

var ee1:MyMethodSignature  = add;
console.log("Ee is ",ee1(100,200));
//var e111:MyMethodSignature = show;
//e111();

var d3 : number|string;
 //d= "Hello";
 //d3 = 1000;
 //d3  = true;

type mytype = {id:number, name:string};
var obj3:mytype = {id:1001,name:'Ram'};
function failure():never{
    throw new Error("System Fail");

}

var d4:Array<string> = new Array<string>();

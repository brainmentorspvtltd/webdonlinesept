var a = 100;
var b = 100;
//b= "Ram";
var c = "Amit";
var d = true;
var e = 100;
e = "ram";
e = true;
console.log("B is " + b + " d is " + d + " e is " + e);
var d1 = [10, 20, true, "amit"];
var ee = ["amit", "ram"];
var tup = ["ram", 21];
var Color;
(function (Color) {
    Color[Color["RED"] = 100] = "RED";
    Color[Color["GREEN"] = 200] = "GREEN";
    Color[Color["BLUE"] = 300] = "BLUE";
})(Color || (Color = {}));
var colorValue;
if (10 > 20) {
    colorValue = Color.RED;
}
else {
    colorValue = Color.GREEN;
}
switch (colorValue) {
    case Color.RED:
        console.log("Red Color");
        break;
    case Color.GREEN:
        console.log("Green Color");
        break;
}
function add(x, y) {
    return x + y;
}
var result = add(100, 200);
console.log("Result is ", result);
var Emp = /** @class */ (function () {
    //private name:string;
    function Emp(id, name, salary, address) {
        this.name = name;
        this.salary = salary;
        this.address = address;
        this.id = id; // Initalize
    }
    Emp.prototype.print = function () {
        console.log("Id is " + this.id + " Name is " + this.name + " Salary " + this.salary + " and Address is " + this.address);
    };
    return Emp;
}());
var ram = new Emp(1001, "Ram", 9999, "Delhi");
ram.print();
console.log(" Emp is ", typeof (Emp));
console.log("Ram is ", typeof (ram));

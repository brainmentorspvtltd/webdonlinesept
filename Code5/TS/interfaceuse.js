function add(x, y) {
    return x + y;
}
function show() {
    console.log(" i am a Show ");
}
var ee = add;
console.log("Ee is ", ee(100, 200));
var e1 = show;
e1();

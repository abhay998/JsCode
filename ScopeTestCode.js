let a  = 10

{
   // console.log(a) //ReferenceError: Cannot access 'a' before initialization
    let a = 20;
    console.log(a)
}
console.log(a)

var b= 30;
function callValue(){
 //  console.log("before b"+b) //ReferenceError: Cannot access 'b' before initialization
    let b = 40;
    console.log("after b"+b)

}
callValue();


var c = 50;
{
    //console.log("before c"+c) //ReferenceError: Cannot access 'b' before initialization
    let c = 40;
    console.log("after c"+c)

}


let xyz = abc = 130;

delete xyz;

console.log(xyz);
console.log(abc);

{
    var def = 78;
}

console.log(def)

// function callNewFunc(){
//     var ghj = 78;

// }
// callNewFunc()
// console.log(ghj)
console.log(typeof NaN) 
console.log(typeof undefined) 
console.log(typeof null) 
console.log(false)


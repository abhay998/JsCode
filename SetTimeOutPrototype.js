
// let arr = [4,52,4,6,8,8,5,43,9,5,7,9,9,64];

// Object.prototype.addValue = function (){
//  let newArr = [];
//    for(let i in this){
//     newArr.push(this[i] * 2)
//    }

//    return newArr;
// }

// console.log(arr.addValue()) 
// let firstTime = new Date("04/30/2024");
// function callBack() {
//     console.log("hello callback")
// }
// Object.prototype.setTimeOutFunction = function () {
    
//   let now = new Date().getSeconds();
//   console.log(now)
//   let time = 0
//   while(now < 60 time){
//     console.log("jehhg")

//   }
// }
// setTimeOutFunction(2000);


let str = "abhay pratap singh";

String.prototype.addString = function(val){
   return this+val;
}



console.log(str.addString("edjchwedcfjh")) ;

// function printSomeThing(a, a, a){
//     console.log("hey  ", a, a, a)
// }
// const printSomeThing = (a, a, a) =>{
//     console.log("hey  ", a, a, a)
// }
// printSomeThing(45)

let obj = {

}

Object.defineProperty(obj, "addProperties", {
    value: "abhay"
})

// obj.addProperties;
console.log(obj.addProperties)
// Object.addProperties();


function callBack(){

}

Function.prototype.setTimeOutFunction = function(delay, message){

    const callBack = this;

    return setTimeout(()=>{
        console.log(message)
        callBack();
    }, delay)

}

let res = callBack.setTimeOutFunction(2000, "hello how are you");
console.log("res res", res)
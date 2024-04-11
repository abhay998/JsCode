// let a = 10;
// {
//     let a = 20;
//     let b = 30;
//     console.log("a",a)
// }
// console.log("a",a)
//o/p=> 20, 10



// var a = 10;
// var a = 30;
// {
//     var a = 20;
//     let b = 30;
//     console.log("a",a)
// }
// console.log("a",a)
//o/p=> 20, 20



// {
//     var a = 20;
//     let b = 30;
//     console.log("a",a)
// }
// console.log("a",a)
//o/p=> 20, 20

// var a = 20;
// {
//     let a = 10;
//     console.log('a', a)
// }
// console.log("a", a)
// o/p => 10, 20


// let a = 10
// {
//     var a = 10;
// }
// illeagal Shadowing


// let a =10;
// function shadowing(){
//     var a = 20;
//     console.log("a" , a)
// }
// console.log("a" , a)
// shadowing();
// o/p 10, 20


// var fruit = 'apple';
// function printFruits(){
//     let fruit = 'orange';
//     console.log("fruit", fruit);
// }
// printFruits();
// console.log("fruit", fruit);
// o/p orange, apple


// let fruit = 'apple';
// for(let fruit = 0; fruit<= 2; fruit++){
//     console.log("Number ", `${fruit}`)
// }
// 0/p = 0, 1, 2

// var fruit = 'apple';
// for(var fruit = 0; fruit<= 2; fruit++){
//     console.log("Number ", `${fruit}`)
// }
// console.log("Number", fruit);
// 0/p = 0, 1, 2, 3


// const a = 20;
// {
//   const a = 30;
//   console.log("Inside Block 1, a = ",a);
//   {
//     const a = 40;
//     console.log("Inside Block 2, a = ",a);
//   }
// }
// console.log("Outside Block, a = ",a);
// 0/p 30, 40, 20

// const a = 20;
// {
//   const a = 30;
//   console.log("Inside Block 1, a = ",a);
//   {
//     console.log("Inside Block 2, a = ",a);
//   }
// }
// console.log("Outside Block, a = ",a);
// 0/p 30, 30, 20
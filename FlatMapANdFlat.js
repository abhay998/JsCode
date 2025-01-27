let arr = [83,4,67,7,85,3,5,7,8,5,4];

let res = arr.flatMap((item)=> Math.floor(item/2));
console.log("res res", res)

let arr1 = [3,5,5,3,[3,45,8,[3,64,7,9,[3,6,8,9]]]];
let res1 = arr1.flat(3);
console.log("res1 res1", res1)
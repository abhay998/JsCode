const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);

// Expected output: Array [1, 2, 2, 1]

let arr = [53,6,8,8,[4,6,89,32],8, 44,5,[4,6,8],[4,7,40]];

const res = arr.flatMap((item)=> item);
console.log("res ", res)

const obj = {
    name: 'abhay',
    age: 29
}

obj.name ="pratap";
console.log("obj ", obj)
const name = "singh";
// name = "thakur";
console.log("name ", name)
let arr3 = [4,6,8,86,4,43,5,9,7,8,6,4,3,4,66,5];
arr3[2] =  90,
console.log("arr3 ", arr3);



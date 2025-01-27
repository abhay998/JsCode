
let newArr = [];
function recursive(item){
    for(let i = 0; i< item.length; i++){
        if(typeof item[i] == 'number'){
            newArr.push(item[i]);
        }
        recursive(item[i]);
    }
    return newArr
}
let arr = [1,2,4,6,8,9,[3,5,8], [32,4,[6,8] ,[4,7,10], [9]], [6,9], [89],59,3,9,4];
let res  = recursive(arr);
// console.log("res res", res)

let arrCopy = [1,2,4,6,8,9,[3,5,8],[32,4,[6,8],[4,7,10],[9]], [6,9],[89],59,3,9,4];
for(let i = 0; i< arrCopy.length; i++){
    if(Array.isArray(arrCopy[i])){
        console.log("arrCopy[i]", arrCopy[i])
       let ele = arrCopy.splice(i, 1);
       console.log("ele", ele)
       arrCopy.push(ele?.[0])
    }
}
console.log("arrCopy ", arrCopy);

console.log("jjjj", typeof [32,4,[6,8],[4,7,10],[9]])


// function flattenAndSort(arr) {
//     // Base case: if the input is not an array, return it
//     if (!Array.isArray(arr)) {
//         return arr;
//     }

//     let result = [];

//     // Loop through each element in the array
//     arr.forEach(item => {
//         // If the element is an array, recursively flatten it
//         if (Array.isArray(item)) {
//             result = result.concat(flattenAndSort(item));
//         } else {
//             // If the element is not an array, push it to the result array
//             result.push(item);
//         }
//     });

//     // Sort the result array

//     return result;
// }

let newArr4 = [];
let newArr5 = []
function flattenAndSort(inputArr){
    console.log(" top newArr5", inputArr)
    for(let i = 0; i<inputArr.length; i++){
        // newArr4.push(inputArr[i]);
        if(Array.isArray(inputArr[i])){
            newArr5.push(inputArr[i]);
        }
        else{
            newArr4.push(inputArr[i]);
        }
    }
}


const input = [1,2,4,6,8,9,[3,5,8],[32,4,[6,8],[4,7,10],[9]], [6,9],[89],59,3,9,4];
const output = flattenAndSort(input);
console.log("newArr4", newArr4)
console.log("newArr5", newArr5)
console.log(output);





let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let twoDArray = [[2, 4, 6], [3, 7, 14], [0, 8, 45]];

for (let i = 0; i < twoDArray.length; i++) {
    let newArr = twoDArray[i];
    for (let j = newArr?.[0]; j <= newArr[1]; j++) {
        let add = arr[j] + newArr?.[2]
        arr.splice(j, 1, add)
    }
}
console.log("arr", arr)
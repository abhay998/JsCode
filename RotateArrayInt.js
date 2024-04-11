/* 
const matrix = [   [1, 2, 3], 
                    [4, 5, 6], 
                    [7, 8, 9] ]; rotateMatrix(matrix); 
// Output: // [ // [7, 4, 1], // 
                   [8, 5, 2], //  
                   [9, 6, 3] // ] */

const matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
let newArr = []
for (let i = 0; i < matrix?.length; i++) {
    let pushArr = []
    for (let j = matrix?.length - 1; j >= 0; j--) {
        pushArr.push(matrix[j][i])
    }
    newArr.push(pushArr);
}
console.log("newArr newArr", newArr)
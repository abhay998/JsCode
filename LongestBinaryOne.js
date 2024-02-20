let arr1 = [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1]

let count = 0;
let firstZero = 0;
let firstZeroIndex = 0;
let newCount = 0;

for (let j = firstZeroIndex; j < arr1.length; j++) {
    //console.log('firstZeroIndex', firstZeroIndex)
    for (let i = j; i < arr1.length; i++) {
        if (arr1[i] === 0) {
            firstZero++;
            if (firstZero == 1) {
                count++;
                firstZeroIndex = i+1;
            }
            else if (firstZero > 1) {
                // console.log("firstZero ", firstZero)
                if (count > newCount) {
                    newCount = count;
                }
                firstZero = 0;
                count = 0;
                break;
            }
        }
        else if (arr1[i] === 1) {
            count++;
        }
    }
}
console.log("newCount", newCount)

// console.log("count", count)
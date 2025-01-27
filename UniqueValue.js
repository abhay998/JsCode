let arr = [1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 7, 7, 8];
let newArr = [];

for (let i = -1; i < arr.length - 1;) {
    let firstValue = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
        if (firstValue !== arr[j] && arr[j] !== arr[j+1]) {
            i = j;
            newArr.push(arr[j])
            break;
        }
        i++;
        break;
    }
}
console.log(newArr);
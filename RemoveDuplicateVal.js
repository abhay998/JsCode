function RemoveDuplicateVal() {
    let arr = [34, 3, 4, 32, 3, 4, 5, 6, 8, 674, 2, 1, 3, 5, 7, 6, 4, 3, 3];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i])
        }
    }
    console.log("newArr newArr", newArr)
}
RemoveDuplicateVal();
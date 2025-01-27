function AddTwoNumber() {
    let arr1 = [14, 6, 8, 19, 4, 3, 8, 9];
    let arr2 = [4, 6, 8, 9, 4, 3, 2, 2];
    let arr3 = [];
    let rem = 0;
    for (let i = arr1.length- 1; i >= 0; i--) {
           let sum = rem + arr1[i] + arr2[i];
           let modules = sum % 10;
           arr3.unshift(modules)
           rem = Math.floor((arr1[i] + arr2[i]) /10);
    }   
    arr3.unshift(rem)
    console.log("arr3 arr3", arr3)
}
AddTwoNumber();
function binarytoDecimal(number){
    let arr = number.toString();
    let len = arr.length;
    let total = 0;
    let postion = 0;
    for(let i = len - 1; i>=0; i--){
        total += (parseInt(arr[i]) * Math.pow(2, postion))
        postion++;
    }
    console.log(total);
}
binarytoDecimal(10001000);
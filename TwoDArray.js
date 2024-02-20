function twoDArray(){
    let arr = new Array(5);
    for(let i = 1; i<=5; i++){
        let newArr = new Array(5);
        for(let j = 1; j<=5; j++){
           newArr[j] = j
        }
        arr[i] = newArr;
    }
    console.log(arr)
}
twoDArray();
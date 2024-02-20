function insertInArray(){
    let arr = [34,5,7,8,4,34,5,6,7,87,4,3,23,4];
    let shift = 20;
    let position = 6;
    let j = arr.length -1;
    for(j; j>=position; j--){
        arr[j+1] = arr[j];
    }
    arr[j+1] = shift;
    console.log("arr arr", arr)
}
insertInArray();
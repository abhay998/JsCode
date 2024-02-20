function ShiftArray(){
    let arr = [34,5,7,8,4,34,5,6,7,87,4,3,23,4];
    let j =  arr?.length -1;
    let i = 0;
    for(j; i<j; i++, j--){
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;

    }
    console.log("arr arr", arr)

}
ShiftArray();
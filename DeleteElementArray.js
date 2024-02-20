function deleteElementArray(){
    let arr = [34,5,7,8,4,34,5,6,7,87,4,3,23,4];
    let len = arr.length-1;
    // let delPos = 5;
        for(let i = 5; i< len; i++ ){
              arr[i] = arr[i+1]
        }
   console.log("arr arr", arr)
}
deleteElementArray();
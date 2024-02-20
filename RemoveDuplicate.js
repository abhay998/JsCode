function RemoveDuplicate(arr){
  let newArr = {};
  for(let i = 0; i<arr.length; i++){
    if(newArr[arr[i]]){
        newArr[arr[i]]++;
    }
    else{
        newArr[arr[i]] = 1;
    }
  }
  console.log("newArr newArr", newArr)
  for(let j in newArr){
    if(newArr[j] == 1){
     console.log(j)
    }
  }
}
RemoveDuplicate([2, 2, 2, 2, 2, 3,6,7,8,3,4,5,6,4,6,3,4,4]);
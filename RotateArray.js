function RotateArray(arr, number, arrLength){
   for(let i = 1; i<= number; i++){
    let firstElement= arr[0];
    for(let j = 1; j<=arrLength-1; j++){
        arr[j-1] = arr[j]
    }
     arr.splice(arrLength-1, 1, firstElement)
  }
  return arr;
 }
console.log(RotateArray([2,4,6,8,10,12,14,16,18,20], 3, 10))

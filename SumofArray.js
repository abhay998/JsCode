function SumofArray(arr){
    let total = 0;
   for( let i in arr){
      total += arr[i]
   }
   console.log("total ", total)
}
SumofArray([1, 2, 3, 4]);
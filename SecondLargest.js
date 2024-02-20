function SecondLargest(arr){
    let max = 0;
    let secondMax = 0;
   for(let i = 0 ; i<arr.length; i++){
         if(arr[i]> max){
            secondMax = max;
            max = arr[i];
         }
         else if(secondMax< arr[i]){
            secondMax = arr[i]
         }
   }
   console.log("max max",max)
   console.log("secondMax secondMax",secondMax)
}
SecondLargest([12, 35, 1, 10, 34, 1]);
function MaxAndMin(arr, n){
   let max = 0;
   for(let i = 0; i<n; i++){
      if(arr[i]> max){
         max = arr[i];
      }
   }
   console.log("max", max)
   let min = arr[0];
   for(let i = 0; i<n; i++){
      if(arr[i]< min){
        min = arr[i];
      }
   }
   console.log("min", min)
}
MaxAndMin([55, 345, 234, 21, 3, 56789], 6);
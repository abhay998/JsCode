
function duplicateNumberByHashSet(){
    let arr = [3,4,6,7,8,5,4,5,6,7,5,3,3,35,19,5,4,5,6, 13];
   for(let i = 0; i<arr?.length-1; i++){
    for(let j = i+1; j<arr?.length; j++){
        if(arr[i] == arr[j]){
            // let swap = arr[i];
            // arr[i] = arr[j];
            // arr[j] = swap;
            arr[j] = -1;
        }
    }
   }
   for(let i = 0; i<arr.length;i++){
       if(arr[i]>=0){
       console.log("removed repeated arry", arr[i])
       }
   }
}
duplicateNumberByHashSet();
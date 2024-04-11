let arr = [3,3,5,7,4,3,3,5,5,6,7,3,5,6,7,3,3,4,5,6,3,4,5,3,5,4,3,3];

for(let i = 0; i<arr?.length; i++){
    for(let j = i+1; j<arr.length; j++){
         if(arr[i] == arr[j]){
            arr.splice(j,1, -1);
         }
    }
}
for(let j = 0; j<arr.length; j++){
    if(arr[j]> 0){
        console.log("", arr[j]);
    }
}
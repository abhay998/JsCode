function DuplicateValues(){
    let arr = [4,,3,5,7,5,3,2,4,6,7,3,6,9,10,2,3,4];
    //[5,5,5,5,6,6,6]
    //[4,,3,5,7,5,3,2,4,6,7,3,6,9,10,2,3,4];

    for(let i = 0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; ){
           if(arr[i] === arr[j]){
              arr.splice(j, 1)
              j+2
           }
           else{
             j++;
           }
        }
    }
   console.log(arr);
}
DuplicateValues();
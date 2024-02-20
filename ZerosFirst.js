// let arr = [0,1,2,3,0,3,2,1,0,3,2];
// let newArr = [];
// let searchNumber = 0;
// function zeroFirst(){
//      for(let i in arr){
//       if(arr[i] == searchNumber){
//          newArr.splice(0, 0, arr[i])
//       }
//       else{
//          newArr.splice(i, 0, arr[i])
//       }
//      }
//    console.log("newArr newArr", newArr)   
// }
// zeroFirst();

let arr = [0, 1, 2, 3, 0, 3, 2, 1, 0, 3, 2, 0, 48, 35, 3, 2, 0, 3, 0];
let j = arr.length - 1;
let i = 0;
for (i; i < arr.length, j > i;) {
   if (arr[i] == 0) {
      i++
   }  
   else if (arr[j] == 0) {
   }
   else {
      j--;
   }
   let swap = arr[i];
   arr[i] = arr[j];
   arr[j] = swap;
}

console.log("arr arr", arr)

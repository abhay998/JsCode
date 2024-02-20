// function FibonacciNumber(number){
//    let arr = [];
//    for(let i = 0; i<=number; i++){
//       if(i == 0 || i ==1){
//         arr.push(i)
//       }
//       else{
//       arr.push(arr[arr?.length-2]+ arr[arr?.length-1]);
//       }
//    }
//    console.log(arr)
//   }

function FibonacciNumber(n) {
  let arr = [];
  let i = 0;

  while (arr.length < n) {
    if (i == 1 || i == 0) {
      arr[i] = i;
      console.log("hello", arr)
    }
    else {
      let sum = arr[i-1] + arr[i - 2];
      arr[arr.length] = sum;
      console.log("hii", arr)
    }
    i++;
  }
  return arr;

}

let val = FibonacciNumber(9)
console.log("val val", val)

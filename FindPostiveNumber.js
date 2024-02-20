let arr = [1,-2,5,6,-8,-9,4,-5,9,6]
let b = [[2,3],[0,4],[6,8]]
  for(let i =0; i< b.length; i++ ){
      let count = 0;
     for(let j = b[i][0]; j<=b[i][1]; j++){
          if(arr[j]>0){
               count++;
          }
     }
     console.log("count ", count)
  }







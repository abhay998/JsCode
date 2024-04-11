

let arr = [2,4,4,5,3,2,2,4,5,5,,2,34,5,5,3,2,34];
let res = arr?.reduce((sum, item)=>{
   return sum = sum+ item
}, 0)
console.log("res res", res)
function BinaryConversion(val){
   let arr = [];
    while(val> 0){
        let rem = val%2 
        arr.push(rem)
        val = Math.floor(val/2)
    }
    arr.reverse();
    console.log("arr", arr) 
    
}
BinaryConversion(2)
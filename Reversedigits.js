function reverseDigits(number){
      let arr = number?.toString();
      let newStr = ""
     for(let i = arr.length-1; i>=0; i--){
        if(arr.charAt(i) != 0){ 
        newStr += arr.charAt(i);
        }
     }
     console.log("newStr", newStr)
}
reverseDigits(200);
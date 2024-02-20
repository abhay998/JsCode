function armstrongNumber(number){
     let arr = number.toString().split("");
     let len = arr?.length;
     let total = 0;
     for(let i = 0; i< len; i++){
        total = total + Math.pow(arr[i],3)
     }
     if(total == number){
        console.log("This is armstrong number")
     }
     else{
        console.log("This is Not armstrong number")
     }
}
armstrongNumber(371);
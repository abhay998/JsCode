function Pallindrome(number){
    let arr = number.toString();
    let len = arr.length;
    let total = 0;
    let newTotal = "";
    for(let i = 0; i<len; i++)
      {
        total += parseInt(arr?.charAt(i));
    }
    let totalArr = total.toString();

    for(let j = totalArr.length-1; j>=0; j--){
        newTotal += totalArr?.charAt(j);
    }
    if(total == newTotal){
         return 1;
    }
    else{
        return 0;
    }
}
console.log(Pallindrome(98));
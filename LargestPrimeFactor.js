function largestPrimeFactor(number){
     let newArr = [];
        var i = 2;
        while(i<=number && number != 1){
           if(number%i ==0){
            newArr.push(i);
            number = number/i;
            i = 2;
           }
           else{
            i++
           }
        }
console.log("newArr ", newArr)
}
largestPrimeFactor(100)
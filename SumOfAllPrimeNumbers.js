function sumOfAllPrimeNumbers(number){
    let primeArr = [2]
    let total = 0;
    for(let i = 3; i<= number; i++){
        let checkPrime = true;
        for(j = 2; j< i; j++){
            if(i%j == 0){
             checkPrime = false;
            }
        }
        if(checkPrime){
            primeArr.push(i)
        }    
    }
   
    for(let i in primeArr){
        total += primeArr[i];
    }
    console.log("Sum of All Prime Numbers", total)
    
}
sumOfAllPrimeNumbers(5);

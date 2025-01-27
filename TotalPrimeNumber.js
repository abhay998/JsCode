function totalPrimeNumber(number){
    let primeArr = [2]
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
   
    console.log(primeArr)
    
}
totalPrimeNumber(100);





function PrimeNumber(number){
    for(let i = 2; i<= number/2; i++){
          if(number % i == 0){
            return 0
         }
         else {
            return 1;
          }
    }
}
// console.log(PrimeNumber(7)) 
let num = 15;
let checkPrime = PrimeNumber(num)
if(checkPrime){
    console.log(num, "is a prime number")
}
else{
    console.log(num, "is not a prime number")
}

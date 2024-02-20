function Factorial(number){
    if(number == 0 || number == 1)
      return 1;
    else
       return number * Factorial(number-1)  
    
}
console.log(Factorial(10))


const fact = (num)=>{
  num? num == 0 || num == 1 : num * fact(num-1) 
}
console.log('fact', fact(10))
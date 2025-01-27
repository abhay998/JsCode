let number = 12321;
let sum =0;
let rem =0;
while(number> 0){
    console.log("inside sum sum", sum)
     rem = number % 10;
     console.log("rem ",rem)
    sum = (sum * 10) + rem;
    number = Math.floor(number/ 10);
}

console.log("sum sum", sum)
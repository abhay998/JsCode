function countSquares(number){
  let newArr = [];
    for(let i =1; i< number; i++){
        let sqrtVal= Math.pow(i,2);
        if(sqrtVal<number){
            newArr.push(sqrtVal);
        }
    }

    console.log(newArr?.length)
}
countSquares(20)
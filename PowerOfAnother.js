function PowerOfAnother(x, y){
    let endPoint = y;
    let returnVal = 0;
    for(let i = 1; i< endPoint; i++){
        if(Math.pow(x,i) == y){
            returnVal = 1;
            break;
        }
        else{
            returnVal = 0;
        }
    }
    return returnVal;
}
console.log(PowerOfAnother(4,16))

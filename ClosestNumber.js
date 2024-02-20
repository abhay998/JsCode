function closestNumber(givenNumber, divisional){
     givenNumber = Math.abs(givenNumber);
     divisional = Math.abs(divisional);
     let newArr = [];
     for(let i = 1; i<=givenNumber+divisional-1; i++){
        if(i % divisional == 0){
            newArr.push(i)
       }  
     }
    let beforeLast = newArr[newArr?.length-2]
    let last = newArr[newArr?.length-1]
    let beforeFindNear = givenNumber>beforeLast? givenNumber - beforeLast: beforeLast- givenNumber;
    let lastFindNear =  givenNumber>last? givenNumber - last: last - givenNumber ;
    if(beforeFindNear < lastFindNear  && lastFindNear < divisional){
      console.log("beforeLast beforeLast", beforeLast)
    }
    else{
        console.log("last last", last)

    }
    
}
closestNumber(52, 8)
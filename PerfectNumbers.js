    function PerfectNumbers(number){
        let storeNumber = number;
        let newArr = [];
        let total = 0;
           var i = 1;
           while(i<=number){
              if(number%i ==0){
               newArr.push(i);
               number = number/i;
               i = 2;
              }
              else{
               i++
              }
           }
        console.log(newArr)   
       for(let i in  newArr){
          total += newArr[i]
       } 
       if(total == storeNumber)  {
        return 1;
       } 
       else{
        return 0;

       }
   }
   console.log(PerfectNumbers(100)) 

function binaraySearch(search){
    let number = search;
    let arr = [4,6,9,13,14,17,19,23,26,30,34,37,38,40,43,45,49,54,59,65]
    let i =  0;
    let j = arr?.length;
    while(i<=j){
        n = Math.round((i +j)/2)  ;
        if(number ==  arr[n]){
            return n;
        }
        else if (number > arr[n]){
                i = n + 1;
                n = j - i; 
            }
         else 
            j = n-1;  
         }  
         return -1;

}

console.log(binaraySearch(49))
function sumKNumber(){
 let k = 10;
 let arr = [4,5,67,3,25,56,7,8,6,5,3,2,1,23,3,4,44,32,2,3,3,4]
 let i = 0;
 let j = arr.length; 
 for(; i<arr.length; i++){
      if(arr[i]+arr[j] == k){
        console.log("both number", arr[i], arr[j] +" = "+k)
        i++;
        j--;
      }
      else if(arr[i]+arr[j]< k){
        i++;
      }
      else{
        j--;
      }
 }
}
sumKNumber();
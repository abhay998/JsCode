let arr = [4, 5, -7, 53, 5, 6, -4, 1];    // 4+5-7=2   4+5+1= 10,    4+1-4=1
let a = 3;
let  = [];

let sumStart=0;
for(let i = 0; i<a;i++){
      sumStart += arr[i];
}

let i=a-1,j=arr.length-1,max=-1223234;
if(max < sumStart){
    max = sumStart;
}
while(i>=0){
    sumStart = sumStart-arr[i]+arr[j];
    i--;
    j--;
    if(max < sumStart){
        max = sumStart;
    }

}
console.log(max);


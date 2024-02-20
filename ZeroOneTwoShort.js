function sort012(arr, N)
{
    let newArr = []
    //your code here
    for(let i = 0; i<=N; i++){
              for(let j = 0; j<=N; j++){
                if(arr[j] == i){
                  newArr.push(i);
            }
         }
    }
// return newArr;
console.log(newArr)
}
sort012([0, 2, 1, 2, 0], 5)
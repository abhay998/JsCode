function convertToWave(n, arr)
{
    //your code here
    // let newArr = [];
    
    for(let i =0; i<n; i+=2){
        let temp = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = temp; 
    }
    if(n % 2 != 0){
        arr[n-1] = arr[n-1];
    }
    console.log("arr ", arr)
}
convertToWave( 5, [2,4,7,8,9,10]);
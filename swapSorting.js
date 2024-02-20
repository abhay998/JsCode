function swapSorting(){
    let arr = [33,5,6,7,5,43,4,7,4,5,78,5,3,56,78,5,33,5];
    let i ,j ;
    for(j = arr.length-1,i=0; i<j; i++, j--){
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
    }
    console.log("arr ", arr)

}
swapSorting();
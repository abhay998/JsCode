function BubbleShort() {
    let arr = [14, 6, 3, 25, 73, 2, 6, 88, 22];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
             if(arr[i]> arr[j]){
                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
             }
        }
    }
    console.log("arr arr", arr)
}
BubbleShort();
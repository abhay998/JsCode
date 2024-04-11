function BubbleShort() {
    let arr = [14, 6, 3, 25, 73, 2, 6, 88, 22];
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i -1; j++) {
             if(arr[j]> arr[j+1]){
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
                swapped = true
             }
        }
        if(swapped == false){
            break;
        }
    }
    console.log("arr arr", arr)
}
BubbleShort();
function KthElement(kth) {
    let arr = [35, 54, 32, 6, 43, 90, 54, 34, 7, 85, 33, 24];
    
    let indexFind = -1;
    let kthSmallest = 0;
    for (let i = 0; i < kth; i++) {
        let smallest = Infinity;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < smallest && arr[j] != -1) {
                smallest = arr[j];
                indexFind = j
            }
        }
        kthSmallest = smallest;
        // // console.log("")
        arr.splice(indexFind, 1, -1)
        // let temp = arr[indexFind];
        // arr[indexFind] = arr[i];
        // arr[i] = temp
        console.log("inline", arr)
    }
    console.log("kthSmallest",kthSmallest)
}

KthElement(6);

function SecnondMax() {
    let arr = [1, 2, 3, 4, 5]
    let firstLargest = 0;
    let SecondLargest = 0
    for (let i = 0; i < arr?.length; i++) {
        if (arr[i] > firstLargest) {
            SecondLargest = firstLargest;
            firstLargest = arr[i]
        }
        // else if (SecondLargest < arr[i]) {
        //     SecondLargest = arr[i]
        // }
    }
    console.log("SecondLargest", SecondLargest)
}
SecnondMax(2)
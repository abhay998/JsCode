
function minusLeft() {
    let arr = [3, -25, 6, 7, 94, -2, -5, 3, 5, -3, -6]

    let i = 0;
    let j = 10;

    while (i < j) {
        while (arr[i] < 0) { i++ }
        while (arr[j] >= 0) { j-- }

        if (i < j) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
        console.log("arr arr", arr)
    }
}
minusLeft();
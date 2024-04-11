function InsertionSort() {
    let j, i, val;
    let arr = [14, 6, 3, 25, 73, 2, 6, 88, 22];
    // [6, 14, 3, 25, 73, 2, 6, 88, 22];
    //  [3, 6, 14, 25, 73, 2, 6, 88, 22];

    for (i = 1; i < arr.length; i++) {
        val = arr[i];
        j = i - 1;

        while (arr[j] > val && j >= 0) {
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        arr[j + 1] = val;
    }

    console.log("arr ", arr)
}
InsertionSort();
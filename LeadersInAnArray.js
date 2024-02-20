//Function to find the leaders in the array.

function leaders(arr, n) {
    let largestNumber = 0;
    let newArr = []

    for (let i = 0; i <= n; i++) {
        largestNumber = arr[i]
        for (let j = i + 1; j <= n; j++) {
            if (arr[j] < largestNumber && j == n - 1) {
                newArr.push(largestNumber);
            }
            else if (arr[j] > largestNumber) {
                break;
            }
        }
    }
    newArr.push(arr[n - 1])
    return newArr
}
leaders([16, 17, 4, 3, 5, 2], 6)
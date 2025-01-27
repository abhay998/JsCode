
function ChunkArray(array, chunkSize) {
    let arr = []
    let newArr = [];
    let count = 1;
    for (let i = 0; i < array.length; i++) {
        if (chunkSize >= count) {
            count++;
            newArr.push(array[i])
        }
        else {
            arr.push(newArr);
            newArr = [];
            newArr.push(array[i]);
            count = 2;
        }
    }
    arr.push(newArr);
    return arr;
}

let array = [1, 2, 3, 4, 5];
let res = ChunkArray(array,2);
console.log("res res", res)
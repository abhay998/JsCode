function addTwoSparshMatrices(){
    let arr = [
        [3,0,0,0,0,6],
        [1,0,9,0,0,6],
        [8,0,0,0,0,0],
        [0,0,5,0,0,6],
        [2,0,0,0,0,4],
    ]
    let arr1 = [
        [3,0,0,18,0,6],
        [1,0,9,0,0,6],
        [8,23,0,0,0,0],
        [0,0,5,19,0,6],
        [2,0,0,0,0,4],
    ]
let newArr = [];
    for(let i = 0; i<arr?.length; i++){
        let newArr1 = [];
        for(let j = 0; j<arr?.[0]?.length; j++){
                newArr1.push(arr[i][j] + arr1[i][j])
        }
        newArr.push(newArr1)
    }
    console.log("newArr ", newArr)

}
addTwoSparshMatrices();
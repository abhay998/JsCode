function sparashMatrices(){
    let arr = [
        [3,0,0,0,0,6],
        [1,0,9,0,0,6],
        [8,0,0,0,0,0],
        [0,0,5,0,0,6],
        [2,0,0,0,0,4],
    ]
let newArr = [];
    for(let i = 0; i<arr?.length; i++){
        for(let j = 0; j<arr?.[0]?.length; j++){
             if(arr[i][j] != 0){
                newArr.push(arr[i][j])
             }
        }
    }
    console.log("newArr ", newArr)

}
sparashMatrices();
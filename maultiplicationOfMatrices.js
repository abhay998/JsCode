let newArr = [];
function maultiplicationOfMatrices(){
    let arr = [
        [3,0,0,0,0,6],
        [1,0,9,0,0,6],
        [8,0,0,0,0,0],
        [0,0,5,0,0,6],
        [2,0,0,0,0,4],
        [8,23,0,0,0,0],
    ]
    let arr1 = [
        [3,0,0,18,0,6],
        [1,0,9,0,0,6],
        [8,23,0,0,0,0],
        [0,0,5,19,0,6],
        [2,0,0,0,0,4],
        [7,0,0,6,0,4],
    ]
    // let arr = [
    //     [12, 8, 4],
    //     [3, 17, 14],
    //     [9, 8, 10],
    // ]
    // let arr1 = [
    //     [5, 19, 3],
    //     [6, 15, 9],
    //     [7, 8, 16],
    // ]
   for(let k = 0; k<6; k++){
    let newArr1 = []
    for(let i =0; i<6;i++){
        let num = 0;
        for(let j = 0; j<6; j++){
            num+= arr[k][j] * arr1[j][i]
        }
        newArr1.push(num)
    }
    newArr.push(newArr1)
   }
}

maultiplicationOfMatrices();
console.log("newArr ", newArr);

function RotateionLeft(numbers){
    let arr = [4,6,8,9,3,5,6,8,5,4];
       let val;
        for(let i = 0; i<numbers; i++){
            val = arr[arr.length -1];
            for(let j =  arr.length-1; j>0; j--){
                  arr[j] = arr[j-1]
                //   console.log("j "+arr[j])
            }
            arr[0] = val;
        }
        for(let k = 0; k<arr.length; k++){
             console.log("k "+arr[k])
        }
        }
    
        // RotateionRight(3);
        RotateionLeft(3);


    // function RotateionRight(numbers){
    //     let arr = [4,6,8,9,3,5,6,8,5,4];
    //        let val;
    //         for(let i = 0; i<numbers; i++){
    //             val = arr[0];
    //             for(let j =  0; j<arr.length-1; j++){
    //                   arr[j] = arr[j+1]
    //                 //   console.log("j "+arr[j])
    //             }
    //             arr[arr.length-1] = val;
    //         }
    //         for(let k = 0; k<arr.length; k++){
    //              console.log("k "+arr[k])
    //         }
    //         }
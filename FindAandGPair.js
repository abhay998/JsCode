let str = "abcdgfghijaag"; // 5

let arr = str.split('');
// console.log("arr arr",arr)
let count = 0;
let result = 0;
    // for (let i = j + 1; i < arr.length; i++,j++) {
    //     console.log("j ", j)
    //     if (arr[j] + arr[i] == 'ag') {
    //         // console.log("a[i] + ar[i+1] ", arr[i] + arr[i+1])
    //         count++;
    //     }
    // }
    // j++;
    let i =0;
    while(i < arr?.length){
        if (arr[i] == 'a'){
            count++;
        }else if(arr[i] == 'g'){
            result += count;
        }
        i++;
    }
   

console.log("result ", result)

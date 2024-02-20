function LCSof3(A, B, C) {
    let count = 0;
    let newStr = "";
     let str = "";
    for (let i = 0; i < A.length; i++) {
        str += A[i];
        console.log("str", str)
        if (B.startsWith(str) && C.startsWith(str)) {
            newStr+= str;
            count++;
        }
        else {
            count = 0;
            str = "";
            newStr = "";
        }
    }
    console.log("newStr", newStr)
    console.log("count", count)

}
//abcde adeqc paiqdmce
let A = "abcde"
let B = "adeqc"
let C = "paiqdmce"
LCSof3(A, B, C)

//code here

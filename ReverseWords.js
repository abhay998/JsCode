let S = "i.like.this.program.very.much";

let strArr = S.split('.');
let newStr = '';
console.log(strArr);
for(let i = strArr?.length -1; i>=0; i--){
    newStr = newStr+ strArr[i]+".";
}

console.log("newStr newStr", newStr);

// function LcmAndGcd(a, b){
//     let findGreater = 0;
//     let totalVal = 0;
//     if(a>b){
//         findGreater = a;
//     }
//     else{
//         findGreater = b;
//     }
//     // console.log(findGreater)
//     let divisionNumber = findGreater/2;
//     for(let i= 2; i< divisionNumber; i++){
//         // if(a%i ==0 || b%i ==0){
//         //     console.log("i ", i)
//         // };
//         if(a !== 1 || b!== 1){
//             // totalVal += i;


//         a = a%i == 0? a/i : a;
//         b = b%i == 0? b/i : b;  
//         }     
//         console.log(a)
//         console.log(b) 
//     }
//     // console.log(a)
//     // console.log(b)
//     // let total = (a*b);
//     // console.log(total)

// }

function LcmAndGcd(n1, n2,) {
    while (n1>0) {
        let rem = n2 % n1;
        n2 = n1;
        n1 = rem;
    }
    return n2;

}
console.log(LcmAndGcd(8, 14));
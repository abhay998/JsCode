Reverse();

// function Reverse(){
//     let a = "abhaypratap";
//     let b = a.split("");
//     let c = ""
//     for(let i = b.length-1 ; i>=0; i--){
//         c= c+b[i];
//     }
//     console.log("c "+c)
// }

function Reverse(){
    let a = "abhaypratap";
    let c = ''
    for(let i = a.length; i>=0; i--){
        c = c+  a.charAt(i);
    }
    console.log("hey ", c)

}
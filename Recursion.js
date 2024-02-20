function func1(n){
    if(n> 0){
       console.log("number ", n)
       func1(n-1);
    } 
   
}

function main(){
    let x = 3;
   let val =  func1(x);
   console.log("val ", val)

}
main();
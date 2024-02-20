let count = 0;
let string = "";
function numberPrint(){
    for(let i = 1; i<=5; i++){
        for(let j = 1; j<=i; j++){
            count++;
            string += count + " ";
        }
        string += "\n";
    }

}
numberPrint();
console.log(string);
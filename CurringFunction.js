function CurringFunction(a){
    return function (b){
         return function(c){
            console.log(a+b+c);
         }
    }

}
CurringFunction(3)()();


function print(a){
    console.log(a+1)

}
print();
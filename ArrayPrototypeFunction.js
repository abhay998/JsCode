let arr = [32, 3, 22, 3, 54, 3, 23, 5, 42, 3];

Array.prototype.sum = function () {
    let total = 0
    for (let i of this) {
        total += i;
    }
    return total;
}
let res = arr.sum();
console.log("res res", res);


Array.prototype.oddNumber = function(){
    let newArr = []
      for(let i of this){
            if(i%2){
                newArr.push(i);
            }
      }
      return newArr;
}

let odd = arr.oddNumber();
console.log("odd odd", odd);

Array.prototype.filterArr = function(){
    let newArr = [];
        for(let i in this){
            if(i > 5){
                newArr.push(this[i])
            }
        }
        return newArr;
}

let filterArrRes = arr.filterArr();
console.log("filterArrRes ", filterArrRes)






let obj = {
    total: 0
}
obj.sum = 20;
obj.printValue = function(){
    console.log(this.total+ " "+this.sum)
}
Object.defineProperty(obj, 'addMethod', {
    get: function () {
        return this.total++;
    }
})

obj.max = 10;


obj.addMethod;
console.log("obj", obj);
function Person(name, age , address){
    this.name = name;
    this.age = age;
    this.address =  address
}
Person.prototype.pincode =  '311021';
let per = new Person('abhay', 25, 'jaipur');
delete Person.prototype.age

console.log("per per", per)

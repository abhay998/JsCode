let obj = {
    firstName: 'Abhay',
    lastName: 'Singh',
    city: 'bangalore'

}

let newObj = obj;
newObj.state = 'bangalore';
console.log("obj", obj);


function Person(name, city, gender){
    // constructor(){
    this.name = name;
    this.city = city;
    this.gender = gender

    // }
}
Person.prototype.state = 'Rajasthan'

let person = new Person('Aman', 'bhilwara', 'male');
Person.prototype.changeName = function(){
    return this.name;
}

// person.state = 'Rajasthan'

console.log("person", person?.changeName())

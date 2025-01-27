let obj = { 0: 'Singh' };

Array.from({ length: 10 }).forEach((item, key)=>(
    obj[Number(10-key)]= "Abhay"
))

console.log(obj)
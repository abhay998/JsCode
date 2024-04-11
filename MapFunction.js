let map = new Map();
map.set('1', 'abhay');
map.set('2', 'pratap');
map.set('3', 'singh');
map.set('3', 'jai');


console.log(map.get('3')); 
// map.clear()
// map.delete('1');
console.log( map.has('2'));
 for(let x of map.entries()){
    console.log("", x);
 }
 map.forEach((value, key)=>{
    console.log(key, value);
 })

for(let j  of  map.keys()){
    console.log("j ", j);
}
for(let j  of  map.values()){
    console.log("j ", j);
}
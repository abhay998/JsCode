let set = new Set();
set.add(2);
set.add(2);
set.add(2);
set.add(3);
set.add(3);

set.forEach((value)=>{
    console.log("value ",value)
})

for(let j of set.entries()){
    console.log("jjj", j)
}
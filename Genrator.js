function* functionX(){

    yield 1;
    yield 2;
    yield 3;
    return;
    
 }
 
 let gen = functionX();
//  console.log("gen 1", gen.next() )
//  console.log("gen 2", gen.next() )
//  console.log("gen 3", gen.next() )
//  console.log("gen 4", gen.next(4) )
//  console.log("gen 5", gen.next() )

 for(let x of gen){
    console.log(x);
 }



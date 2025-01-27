async function callFunction(){
try{
 let res = await Promise.reject("new err");
 console.log("res");
}
catch(err){
 console.log("err", err)
}
}

callFunction();
function duplicateCharcterByHashSet(){
    let str = "finding";
    let newArr =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    console.log("str", str)
    for(let i = 0; i<str?.length;i++){
          if(newArr[str?.charCodeAt(i)-97]){
            newArr[str?.charCodeAt(i)-97]+= 1;
          }
          else{
            newArr[str?.charCodeAt(i)-97]= 1;
          }
    }
    console.log("newArr newArr", newArr)
    for(let j = 0; j<newArr?.length; j++){
        console.log(j +" = "+ newArr[j])
    }

}
duplicateCharcterByHashSet();
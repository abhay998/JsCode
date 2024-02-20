toFindDuplicates();
function toFindDuplicates() {
    let arry = [1,2,1,3,4,3,5,6,8,9,7,6,5,4,2,1,3,4,5,6,7,8,9,7,5,4,12];
    let toMap = {};
    for (let i = 0; i < arry.length; i++) {

        if (toMap[arry[i]]) {
            toMap[arry[i]]++;
        }
        else{
            toMap[arry[i]] = 1;
        }
    }
  for(let i in toMap) {
      console.log(i +" is times "+ toMap[i])
  } 
}
    
function dragnoallyMarix(){
    for(let i = 0; i<5; i++){
        let arr = [[]];
        for(let j = 0; j<5; j++){
              if(i == j){
                arr[j] = 3
              }
              else{
                arr[j] = 0
              }
              arr['<br />']
        }
        console.log(arr)
    }

}
dragnoallyMarix();
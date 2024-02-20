function starPattern(){
    let str = ""
  for(let i = 1; i<=5; i++){
    for(j = 1; j<=i; j++){
        str+=  " x "
    }
    str+= "\n"
  }
  console.log(str)
}
starPattern();
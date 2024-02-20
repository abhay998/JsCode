function Reducer(){
   let arr = [2,4,4,6,7,3,3,5,6,5,4];
   let afterReducer = arr?.reduce((val, next)=>{
        return  val + (next*2);
   },0)
   console.log("afterReducer afterReducer", afterReducer)
}
Reducer();
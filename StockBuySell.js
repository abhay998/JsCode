class Solution {
    // Function to find the days of buying and selling stock for max profit.
    stockBuySell(A, n)
    {
        //your code here
    let max = -1;
    let maxProfit=0;
    let min = Number.MAX_VALUE;
 
  for(let i = 0;i < A.length;i++){
      if(A[i] < min){
          min = A[i];
          max=0;
      }else if(A[i] > max){
          max = A[i];
      }
      if(maxProfit < (max-min)){
          maxProfit=max-min;
      }
  }
  let result=0;
  if(maxProfit > 0){
       result=1;
  }
  return result;
 }}

// Example usage:
const solution = new Solution();
const stockPrices = [100, 180, 260, 310, 695, 535, 40];
const n = stockPrices.length;
console.log(solution.stockBuySell(stockPrices, n));

function slidingWindow (arr, num) {
  if(num > arr.length )return null
  let i=0;
  let j=1;
  let maxSum = arr[i]
  while (j < num){
    maxSum += arr[j]
    j++
  }
  let temp = maxSum
  while(j < arr.length){
    temp = temp + arr[j] - arr[i]
    if(temp > maxSum){
      maxSum = temp
    }
    i++;
    j++;
  }
  return maxSum
}
function slidingWindowRefactor (arr, num) {
  let maxSum = 0;
  if(arr.length < num) return null
  for(let i=0; i<num; i++){
    maxSum += arr[i];
  }
  let tempSum = maxSum
  for(let i= num; i< arr.length; i++){
    tempSum = tempSum + arr[i] - arr[i-num];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}
module.exports = slidingWindow
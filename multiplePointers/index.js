function multiplePointers (arr) {
  let leftIndex = 0
  let rigthIndex= arr.length - 1
  while(rigthIndex > leftIndex){
    let sum = arr[leftIndex] + arr[rigthIndex]
    if(sum === 0){
      return [arr[leftIndex], arr[rigthIndex]]
    } else if (sum >0){
      rigthIndex --;
    } else {
      leftIndex ++;
    }
  }
  return undefined
}

module.exports = multiplePointers
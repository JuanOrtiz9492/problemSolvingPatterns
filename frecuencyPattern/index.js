function same (arr1, arr2) {
  if(arr1.length !== arr2.length) return false
  let frecuencyCounter1 = {}
  let frecuencyCounter2 = {}
  for(value of arr1) {
    frecuencyCounter1[value] = (frecuencyCounter1[value] || 0) +1
  }
  for(value of arr2) {
    frecuencyCounter2[value] = (frecuencyCounter2[value] || 0) +1
  }
  for(let key in frecuencyCounter1){
    if(!(key ** 2 in frecuencyCounter2)){
      return false
    }
    if(frecuencyCounter2[key ** 2] !== frecuencyCounter1[key]){
      return false
    }
  }
  return true
}

module.exports = same
const multiplePointers = require('./index')

describe('Multiple Pointers pattern test', ()=> {
  it('array [-3,-2,-1,0,1,2,3] should return [-3,3]', ()=> {
    expect(multiplePointers([-3,-2,-1,0,1,2,3])).toStrictEqual([-3,3])
  })
  it('array [-4,-3,0,1,2,3,5,6] should return [-3,3]', ()=> {
    expect(multiplePointers([-4,-3,0,1,2,3,5,6])).toStrictEqual([-3,3])
  })
  it('array [-2,0,1,3] should return undefined', ()=> {
    expect(multiplePointers([-2,0,1,3])).toBeUndefined()
  })
  it('array [1,2,3] should return undefined', ()=> {
    expect(multiplePointers([1,2,3])).toBeUndefined()
  })
})
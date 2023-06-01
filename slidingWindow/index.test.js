const slidingWindow = require('./index')

describe('Sliding Window pattern test', ()=> {
  it('props [1,2,5,2,8,1,5] and 2 should return 10', ()=> {
    expect(slidingWindow([1,2,5,2,8,1,5],2)).toBe(10)
  })
  it('props [1,2,5,2,8,1,5] and 4 should return 17', ()=> {
    expect(slidingWindow([1,2,5,2,8,1,5],4)).toBe(17)
  })
  it('props [4,2,1,6] and 1 should return 6', ()=> {
    expect(slidingWindow([4,2,1,6],1)).toBe(6)
  })
  it('props [] and 4 should return null', ()=> {
    expect(slidingWindow([],4)).toBeNull()
  })
})
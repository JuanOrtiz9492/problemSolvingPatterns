const same = require('./index')

describe('Frecuency pattern test', ()=> {
  it('arrays [1,2,3] and [4,1,9] shold be truthly', ()=> {
    expect(same([1,2,3],[4,1,9])).toBeTruthy()
  })
  it('arrays [1,2,3] and [1,9] shold be falsy', ()=> {
    expect(same([1,2,3],[1,9])).toBeFalsy()
  })
  it('arrays [1,2,1] and [4,4,1] shold be falsy', ()=> {
    expect(same([1,2,1],[4,4,1])).toBeFalsy()
  })
})
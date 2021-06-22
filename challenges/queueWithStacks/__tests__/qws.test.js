'use strict'
require('jest')
let Queue = require('../queue-with-stacks')

describe('PseudoQueue class.', () => {
  it('should enqueue using stack methods', () => {
    let rr = new Queue()
    rr.enqueue(5)
    rr.enqueue(6)
    rr.enqueue(7)
    // console.log(rr);
    expect(rr.size).toEqual(3)

  })
  it('should dequeue using stack method', () => {
    let rr = new Queue()
    rr.enqueue(5)
    rr.enqueue(6)
    rr.enqueue(7)
    rr.dequeue()
    // console.log(rr);
    expect(rr.size).toEqual(2)
  })
})
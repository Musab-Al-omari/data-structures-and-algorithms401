'use strict'

require('jest')
let sort = require('../bachSort')
describe('javaScript sort', () => {
  it('can sort arrays  [6,8,9,7,5]=>[5,6,7,8,9]', () => {
    let hh = [6,8,9,7,5]
    
    expect(sort(hh)).toEqual([5,6,7,8,9])

  })
  it('can sort arrays  [60,40,30,70,50]=>[30,40,50,60,70]', () => {
    let hh = [60,40,30,70,50]
    expect(sort(hh)).toEqual([30,40,50,60,70])

  })




 
})
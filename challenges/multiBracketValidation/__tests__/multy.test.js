'use strict';

const multiBracketValidation = require('../multi-bracket-validation')


describe('Multi-bracket Validation.', () => {
  it('return true when the string {}(){}', () => {
    expect(multiBracketValidation('{}(){}')).toEqual(true)
  })
  it('return true when the string ()[[Extra Characters]]', () => {
    expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true)
  })
  it('return true when the string (){}[[]]', () => {
    expect(multiBracketValidation('(){}[[]]')).toEqual(true)

  })
  it('return true when the string {}{Code}[Fellows](())', () => {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true)
  })
  it('return false when the string [({}]', () => {
    expect(multiBracketValidation('[({}]')).toEqual(false)
  })
  it('return false when the string (](', () => {
    expect(multiBracketValidation('(](')).toEqual(false)

  })
  it('return false when the string {(})', () => {
    expect(multiBracketValidation('{(})')).toEqual(false)

  })

})
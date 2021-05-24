'use strict'

require('jest')
let AnimalShelter = require('../animal-shelter')
describe('animal shelter', () => {
  it('insert an cat to the shelter', () => {
    let hh = new AnimalShelter();
    hh.enqueue('cat')

    console.log(hh.cats[0]);
    expect(hh.cats[0]).toEqual('cat')

  })
  it('insert an dog to the shelter', () => {
    let hh = new AnimalShelter();
    hh.enqueue('dog')


    expect(hh.dogs[0]).toEqual('dog')
  })
  it('insert multi dogs to the shelter', () => {
    let hh = new AnimalShelter();
    hh.enqueue('dog')
    hh.enqueue('dog')
    expect(hh.dogs.length).toEqual(2)
  })
  it('insert multi cats to the shelter', () => {
    let hh = new AnimalShelter();
    hh.enqueue('cat')
    hh.enqueue('cat')
    expect(hh.cats.length).toEqual(2)
  })
  it('call a cat  out of  the shelter', () => {
    let hh = new AnimalShelter();
    hh.enqueue('cat')
    hh.dequeue('cat')
    expect(hh.cats.length).toEqual(0)
  })
  it('call a dog  out of  the shelter', () => {
    let hh = new AnimalShelter();
    hh.enqueue('dog')
    hh.dequeue('dog')
    expect(hh.dogs.length).toEqual(0)
  })
  it('if there is no dog', () => {
    let hh = new AnimalShelter();
    expect(hh.dequeue('dog')).toEqual('no dogs here')
  })
  it('if there is no cat', () => {
    let hh = new AnimalShelter();
    expect(hh.dequeue('cat')).toEqual('no cat here')
  })






})
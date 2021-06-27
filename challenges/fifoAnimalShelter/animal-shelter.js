'use strict';
class Animal {
  constructor(type) {
    this.type = type

  }
}
class AnimalShelter {
  constructor() {
    this.cats = []
    this.dogs = []


  }

  enqueue(type) {
    let enterAnimal = new Animal(type)
    if (enterAnimal.type === 'dog') {
      this.dogs.push(enterAnimal.type)
      return enterAnimal.type
    } else if (enterAnimal.type === 'cat') {
      this.cats.push(enterAnimal.type)
      return enterAnimal.type
    } else {

      return 'this is not cat nor dog'
    }
  }


  dequeue(pref) {
    if (pref === 'dog') {

      if (this.dogs.length != 0) {
        let outerDog = this.dogs.shift()
       
        return outerDog
      }
      return 'no dogs here'

    } else if (pref === 'cat') {
      if (this.cats.length != 0) {
        let outerCat = this.cats.shift()
        return outerCat
      }
      return 'no cat here'
    } else {
      return 'no animal with this type'

    }
  }
}
module.exports = AnimalShelter
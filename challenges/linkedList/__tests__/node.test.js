'use strict';

const linkedList = require('../linked-list');
let LinkedList = require('../linked-list')

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let ll = new LinkedList();
    expect(ll.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    let ll = new linkedList()
    ll.insert(5)
    ll.insert(9)
    expect(ll.head.value).toEqual(5)
    expect(ll.head.next.value).toEqual(9)


  });
  it('The head property will properly point to the first node in the linked list', () => {
    let ll = new linkedList()
    ll.insert('first')
    ll.insert('second')
    console.log(ll.head);
    expect(ll.head.value).toEqual('first')
    expect(ll.head.next).toEqual({ value: 'second', next: null })

  });
  it('Can properly insert multiple nodes into the linked list', () => {
    let ll = new linkedList()
    ll.insert(5)
    ll.insert(9)
    ll.insert(15)
    expect(ll.head.value).toEqual(5)
    expect(ll.head.next.value).toEqual(9)
    expect(ll.head.next.next.value).toEqual(15)

  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let ll = new linkedList()
    ll.insert(5)
    ll.insert(9)
    ll.insert(15)
    expect(ll.includes(15)).toEqual(true)


  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let ll = new linkedList()

    expect(ll.includes('why')).toEqual(false)

  })
  it('return a collection of all the values that exist in the linked list', () => {
    let ll = new linkedList()
    ll.insert('a')
    ll.insert('b')
    ll.insert('c')
    expect(ll.toString()).toEqual('{a}->{b}->{c}->{null}');
  });
})
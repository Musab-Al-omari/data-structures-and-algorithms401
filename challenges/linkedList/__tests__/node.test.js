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
    ll.append(5)
    ll.append(9)
    expect(ll.head.value).toEqual(5)
    expect(ll.head.next.value).toEqual(9)


  });
  it('The head property will properly point to the first node in the linked list', () => {
    let ll = new linkedList()
    ll.append('first')
    ll.append('second')

    expect(ll.head.value).toEqual('first')
    expect(ll.head.next).toEqual({ value: 'second', next: null })

  });
  it('Can properly append multiple nodes into the linked list', () => {
    let ll = new linkedList()
    ll.append(5)
    ll.append(9)
    ll.append(15)
    expect(ll.head.value).toEqual(5)
    expect(ll.head.next.value).toEqual(9)
    expect(ll.head.next.next.value).toEqual(15)

  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let ll = new linkedList()
    ll.append(5)
    ll.append(9)
    ll.append(15)
    expect(ll.includes(15)).toEqual(true)


  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let ll = new linkedList()

    expect(ll.includes('why')).toEqual(false)

  })
  it('return a collection of all the values that exist in the linked list', () => {
    let ll = new linkedList()
    ll.append('a')
    ll.append('b')
    ll.append('c')
    expect(ll.toString()).toEqual('{a}->{b}->{c}->{null}');
  });
  it('insert before a given value ', () => {
    let ll = new linkedList()
    ll.append('a')
    ll.append('b')
    ll.append('c')
    ll.insertBefore('a', 'z')
    ll.insertAfter('c', 'z')
    expect(ll.toString()).toEqual('{z}->{a}->{b}->{c}->{z}->{null}')
  })


  it('k-th value from the end of a linked list. all test done in one it ', () => {
    let ll = new linkedList()
    ll.append('a')
    ll.append('b')
    ll.append('c')
    expect(ll.kthFromEnd(0)).toEqual('c')
    expect(ll.kthFromEnd(1)).toEqual('b')
    expect(ll.kthFromEnd(2)).toEqual('a')
    expect(ll.kthFromEnd(3)).toEqual('Exception')

  })

  it('function to reverse a Singly Linked List ', () => {
    let ll = new linkedList()
    ll.append('a')
    ll.append('b')
    ll.append('c')
    let newLinkedList = ll.reverse()
    expect(newLinkedList.value).toEqual('c')
    expect(newLinkedList.next.value).toEqual('b')
    expect(newLinkedList.next.next.value).toEqual('a')
      // expect().toEqual('Exception')

  })
  it('Linked list is palindrome ', () => {
    let ll = new linkedList()
    ll.append('b')
    ll.append('a')
    ll.append('b')

    let firstLL = ll.palindrome()

    // ll.append('a')
    // let secondLL = ll.palindrome()

    expect(firstLL).toEqual(true)
      // expect(secondLL).toEqual(true)
  })










})
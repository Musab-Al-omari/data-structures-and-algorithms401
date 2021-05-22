'use strict';

const Stack = require('../stacks-and-queues').Stack
const Queue = require('../stacks-and-queues').Queue

describe('Linked List', () => {
  it('Can successfully push onto a stack', () => {
    let ss = new Stack();
    ss.push(5)
    expect(ss.storage[0].value).toEqual(5)
  });

  it('Can successfully push multiple values onto a stack', () => {
    let ss = new Stack();
    ss.push(5)
    ss.push(6)
    expect(ss.storage[1].value).toEqual(5)
    expect(ss.storage[0].value).toEqual(6)
  });
  it('Can successfully pop off the stack', () => {
    let ss = new Stack();
    ss.push(5)
    ss.push(6)
    expect(ss.pop().value).toEqual(6)
  });
  it('Can successfully empty a stack after multiple pops', () => {
    let ss = new Stack();
    ss.push(5)
    ss.push(6)
    ss.pop()
    ss.pop()
    expect(ss.storage).toEqual([])
  });
  it('Can successfully peek the next item on the stack', () => {
    let ss = new Stack();
    ss.push(5)
    ss.push(6)
    expect(ss.peek().value).toEqual(6)
  });
  it('Can successfully instantiate an empty stack', () => {
    let ss = new Stack();
    expect(ss instanceof Stack).toBeTruthy();
  })
  it('Calling pop or peek on empty stack raises exception', () => {
    let ss = new Stack();
    let x = ss.pop()
    let y = ss.peek()
    expect(x).toEqual('exception')
    expect(y).toEqual('exception')

  });
  it('Can successfully enqueue into a queue ', () => {

    let qq = new Queue()
    qq.enqueue(1)
    expect(qq.MyQueue[0].value).toEqual(1)
  })

  it('Can successfully enqueue multiple values into a queue', () => {
    let qq = new Queue()
    qq.enqueue(1)
    qq.enqueue(2)
    expect(qq.MyQueue[0].value).toEqual(1)
    expect(qq.MyQueue[1].value).toEqual(2)
  })

  it('Can successfully dequeue out of a queue the expected value ', () => {
    let qq = new Queue()
    qq.enqueue(1)
    qq.enqueue(2)
    expect(qq.dequeue().value).toEqual(1)
  })

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let qq = new Queue()
    qq.enqueue(1)
    qq.enqueue(2)
    expect(qq.peek().value).toEqual(1)
  })
  it('Can successfully empty a queue after multiple dequeues', () => {
    let gg = new Queue()
    gg.enqueue(1)
    gg.enqueue(2)

    gg.dequeue()
      // console.log('first', gg);

    gg.dequeue()
      // console.log('second', gg);

    expect(gg.isEmpty()).toEqual(true)
  })
  it('Can successfully instantiate an empty queue', () => {
    let qq = new Queue()
    expect(qq instanceof Queue).toBeTruthy()

  })
  it('Calling dequeue or peek on empty queue raises exception', () => {
    let qq = new Queue()
    expect(qq.dequeue()).toEqual('exception')

  })










})
// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  get size() {
    if (!('next' in this)) {
      return 0;
    }

    let cur = this.next;
    let i = 0;
    while (cur !== null) {
      i++;
      cur = cur.next;
    }
    return i;
  }

  enqueue(element) {
    if (!('next' in this)) {
      this.next = new ListNode(element);
      this.next.next = null;
      return;
    }

    let cur = this.next;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = new ListNode(element);
  }

  dequeue() {
    const res = this.next.value;
    this.next = this.next.next;
    return res;
  }
}

module.exports = Queue;

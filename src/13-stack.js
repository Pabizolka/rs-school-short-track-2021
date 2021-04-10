/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    let i = 0;
    while (i in this) {
      i++;
    }
    this[i] = element;
  }

  pop() {
    let res = NaN;
    let i = 0;
    while (i in this) {
      i++;
    }

    res = this[i - 1];
    delete this[i - 1];
    return res;
  }

  peek() {
    let i = 0;
    while (i in this) {
      i++;
    }
    return this[i - 1];
  }
}

module.exports = Stack;

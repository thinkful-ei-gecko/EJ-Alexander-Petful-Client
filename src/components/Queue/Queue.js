const QueueNode = require('./QueueNode');
const queueHelpers = require('./queueHelpers')

class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(data) {
      const node = new QueueNode(data);
      if (this.first === null) {
        this.first = node;
      }
      if (this.last) {
        this.last.next = node;
      }
      this.last = node;
      console.log(JSON.stringify(node) + ' added')
    }
    dequeue() {
      if (this.first === null) {
        return;
      }
      const node = this.first;
      this.first = this.first.next;
      if (node === this.last) {
        this.last = null;
      }
      return node.data;
    }
  }
  
  function main(){
    let starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')
  
    // console.log(queueHelpers.peek(starTrekQ))
    // console.log(queueHelpers.isEmpty(starTrekQ))
    // console.log(queueHelpers.display(starTrekQ))
    starTrekQ.dequeue()
    starTrekQ.dequeue()
    queueHelpers.display(starTrekQ)
  
  }

  module.exports = Queue
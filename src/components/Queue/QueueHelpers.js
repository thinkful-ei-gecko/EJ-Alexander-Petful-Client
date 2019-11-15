const queueHelpers = {

    peek(queue) {
        if (queue.first) {
          // console.log(`The current top is: ${queue.top.data}`); 
          return queue.first.data;
        }
      },

    isEmpty(queue) {
        return !queue.first ? true : false;
    },

    display(queue) {
        let currNode = queue.first;
        let currPos = 1;
        while (currNode) {
          console.log('current position: ' + currPos);
          console.log('data: ' + currNode.data);
          if (currNode.next !== null){
            console.log('next: ' + currNode.next.data);
          } else {
            console.log('next: ' + null)
          }
          console.log('prev: ' + JSON.stringify(currNode.prev));
          currPos += 1;
          currNode = currNode.next;
        }
      },

}

module.exports = queueHelpers
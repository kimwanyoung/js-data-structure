class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  insertFirst(element) {
    let node = new Node(element);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (0 > index || index > this.size) {
      throw new Error("out of range");
    }

    if (index === 0) {
      this.head = new Node(element, this.head);
      this.size++;
      return;
    }

    const node = new Node(element);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.element);
        return;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if (0 > index || index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printList() {
    let current = this.head;

    while (current) {
      console.log(current.element);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertFirst(400);
linkedList.insertFirst(500);

linkedList.removeAt(3);

linkedList.printList();

linkedList.getAt(2);

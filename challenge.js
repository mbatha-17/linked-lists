class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail

  add(number) {
    // your code here
  this.length++;
  let newNode = new Node(number);
  if (this.next) {
  this.next.next = newNode;
  this.next = newNode;
  return newNode;
  }
  this.head = this.next = newNode;
  return newNode;
  }
  
  addAt(index, item) {
  if (index == 0) {
  this.length++;
  let newNode = new Node(item);
  if (this.head) {
  this.head.next = newNode;
  this.head = newNode;
  return newNode;
  }
  
  this.head = this.next = newNode;
  return newNode;
  }
  
  let previous = null;
  let current = this.head;
  for (let i = 0; i < index; i++) {
  previous = current;
  current = current.next;
  }
  
  let newNode = new Node(item);
  newNode.next = current;
  previous.next = newNode;
  
  this.length++;
  return newNode;
  }

  get(index) {
    // your code here
  let initial = this.head;
  let counter = 0;
  while(initial) {
  if(counter == index) {
  return(initial.value)
  }
  counter++;
  initial = initial.next;
  }
  return null;
  }
  
  remove(index) {
  if (index == 0) {
  if(this.head) {
  this.length++;
  let del = this.head;
  this.head = this.head.next;
  return del;
  }
  return null;
  }
  
  let prev = null;
  let cur = this.head;
  
  for (let i = 0; i < index; i++); {
  prev = cur;
  cur = cur.next;
  }
  prev.next = cur.next;
  this.length--;
  return cur;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;

var Queue = function(capacity) {
  this._storage = {};
  this._capacity = capacity;
  this._size = 0;
  this._head = 0;
  this._tail = 0;
};

Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capacity) this._storage[this._tail++] = value;
  else return "Queue is maxed out!";
};

Queue.prototype.dequeue = function() {
  if (this.count() == 0) return "Queue is empty";
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
};

Queue.prototype.peek = function() {
  if (this.count() == 0) return "Stack is empty";
  else return this._storage[this._head];
};

Queue.prototype.count = function() {
  return this._tail - this._head;
};

var queue = new Queue(4);
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.count());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.count());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.count());
console.log(queue.peek());

var Stack = function(capacity) {
  this._storage = {};
  this._capacity = capacity;
  this._count = 0;
};

Stack.prototype.push = function(item) {
  if (this._count < this._capacity) this._storage[this._count++] = item;
  else console.log("Stack overflow");
};

Stack.prototype.pop = function() {
  if (this._count == 0) console.log("Stack is empty");
  else {
    let item = this._storage[--this._count];
    delete this._storage[this._count];
    return item;
  }
};

Stack.prototype.peek = function() {
  if (this._count == 0) console.log("Stack is empty");
  else return this._storage[this._count - 1];
};

Stack.prototype.count = function() {
  return this._count;
};

var stack = new Stack(4);
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.count());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.count());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

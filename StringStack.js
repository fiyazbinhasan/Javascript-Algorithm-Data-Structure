var Stack = function() {
  this._storage = '';
};

Stack.prototype.push = function(item) {
  if (this._storage == '') this._storage = this._storage.concat(item);
  else
    this._storage = this._storage
      .split('-')
      .concat(item)
      .join('-');
  return this._storage;
};

Stack.prototype.pop = function() {
  if (this._storage == '') return 'Stack is empty';
  else {
    let items = this._storage.split('-');
    this._storage = items.slice(0, items.length - 1).join('-');
    return items[items.length - 1];
  }
};

Stack.prototype.size = function() {
  if (this._storage == '') return 0;
  else return this._storage.split('-').length;
};

var stack = new Stack();
console.log(stack.push('Hello'));
console.log(stack.push('Ola'));
console.log(stack.size());
console.log(stack.pop());
console.log(stack.push("Kon'nichiwa"));
console.log(stack.pop());
console.log(stack.size());
console.log(stack.pop());

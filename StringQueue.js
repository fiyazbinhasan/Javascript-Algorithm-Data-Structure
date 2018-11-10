var Queue = function() {
  this._storage = "";
};

Queue.prototype.enqueue = function(item) {
  if (this._storage == "") this._storage = this._storage.concat(item);
  else
    this._storage = this._storage
      .split("-")
      .concat(item)
      .join("-");
  return this._storage;
};

Queue.prototype.dequeue = function() {
  if (this._storage == "") return "Queue is empty";
  else {
    let items = this._storage.split("-");
    this._storage = items.slice(1).join("-");
    return items[0];
  }
};

Queue.prototype.size = function() {
  if (this._storage == "") return 0;
  return this._storage.split("-").length;
};

var queue = new Queue();
console.log(queue.enqueue("Hello"));
console.log(queue.enqueue("Ola"));
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.enqueue("Kon'nichiwa"));
console.log(queue.dequeue());
console.log(queue.size());

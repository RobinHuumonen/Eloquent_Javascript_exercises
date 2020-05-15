class Group {
  constructor() {
    this.elements = [];
  }
  add(value) {
    if (this.has(value) === -1)
      return;
    else
      this.elements.push(value)
  }
  delete(value) {
    for (let element = 0; element < this.elements.length; element++) {
      if (this.elements[element] === value) 
        this.elements.splice(element, 1);
    }
  }
  has(value) {
    return this.elements.includes(value);
  }
  static from(array) {
    let obj = new Group();
    for (let element of array) {
      obj.add(element)
    }
    return obj;
  }

  [Symbol.iterator] = function() {
    return new GroupIterator(this);
  }
}  

class GroupIterator {
constructor(group) {
this.index = 0;
this.group = group;
}

next() {
  if (this.index === this.group.elements.length)
    return {done: true};
  else {
    let value = { value: this.group.elements[this.index],
                  done: false }
    this.index++;
    return value;
  }
}
}

for (let value of Group.from(["a", "b", "c"])) {
console.log(value);
}
class GroupIterator {
    constructor() {
      this.elements = [];
    }
  
    next () {
      
    }
  }
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
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
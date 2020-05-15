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
  
  }  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
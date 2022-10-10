
// =======================

type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(event: EventNames) {

}
handleEvent('click')

// =========
let tom: [string, number];

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Days.Sat)
// =========
class Animal {
  public name;
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`
  }
}
let a = new Animal('Jack')
console.log(a.sayHi())

class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  sayHi() {
    return `My name is ${this.name}`
  }
}

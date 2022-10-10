interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}
let tom: Cat = {
  name: 'Tom',
  run() {
    console.log('run')
  },
}

let animal: Animal = tom

function testAnimal(animal: Animal) {
  return (animal as Cat)
}
function testCat(cat: Cat) {
  return (cat as Animal);
}
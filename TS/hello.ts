interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}
interface Dog {
  name: string;

}
function testAnimal(animal: Animal) {
  return (animal as Cat)
}

function testDog(dog: Dog) {
  return (dog as Animal)
}



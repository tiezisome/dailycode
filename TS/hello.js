var tom = {
    name: 'Tom',
    run: function () {
        console.log('run');
    }
};
var animal = tom;
function testAnimal(animal) {
    return animal;
}
function testCat(cat) {
    return cat;
}

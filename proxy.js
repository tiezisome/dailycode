// @ts-nocheck
// proxy的13个方法
// get()
let person = {
  name: 'jack',
}
let proxy = new Proxy(person, {
  get: function (target, propKey) {
    if (propKey in target) {
      return target[propKey]
    } else {
      throw new ReferenceError('Prop name "' + propKey + '" does not exist.')
    }
  },
})

console.log('proxy.name=', proxy.name)
// console.log('proxy.age=', proxy.age)

// get()方法可以继承
let proto = new Proxy(
  {},
  {
    get(target, propKey, receiver) {
      console.log('GET' + propKey)
      return target[propKey]
    },
  },
)
let obj = Object.create(proto)
console.log('obj.foo=', obj.foo)

// set()

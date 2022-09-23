// @ts-nocheck
//将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上
// Reflect的13个静态方法
// Reflect.get(target,name,receiver)
let person = {
  name: 'jack',
  age: 18,
}
let msg = Reflect.get(person, 'name')
console.log('msg=', msg)

// Reflect.set(target,name,value,receiver)
Reflect.set(person, 'name', 'curry')
console.log('person.name=', person.name)

// Reflect.has(obj,name)
let res = Reflect.has(person, 'age')
console.log('res=', res)

//Reflect.deleteProperty(obj,name)
Reflect.deleteProperty(person, 'age')
console.log('person=', person)

// Reflect.construct(target,args)等同于new target(...args)

// Reflect.getPrototyeOf(obj)用于读取对象的__proto__属性

// Reflect.setPrototyeof(obj,newProto)

// Reflect.apply(func,thisArg,args)

//Reflect.defineProperty(obj,propKey,attr)
Reflect.defineProperty(person, 'name', {
  value: 'Kobe',
})
console.log('person=', person)

// Reflect.getOwnPropertyDescriptor(obj,propKey)
res = Reflect.getOwnPropertyDescriptor(person, 'name')
console.log('res=', res)

// Reflect.isExtensible(target)表示当前对象是否可扩展

//Reflect.preventExtensions(target)用于让一个对象变为不可扩展

// Reflect.ownKeys (target)

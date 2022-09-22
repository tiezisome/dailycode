// @ts-nocheck
// 类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
const m = new Map()
const obj = {}
m.set('id', 110)
m.has('id') // true
m.set(obj, 'hello world')
console.log('m.get(obj)=', m.get(obj))
// 注意下面 obj当做对象的引用地址
const obj1 = {}
const obj2 = {}
m.set(obj1, 120)
m.set(obj2, 130)
console.log('m.get(obj)=', m.get(obj1))

// @ts-nocheck
// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
const s = new Set()
s.add(1)
s.add('hello')
s.add({})
console.log('s.size=', s.size)
// 给数组去重
const arr = [...new Set([1, 2, 3, 3, 3, 3, 4, 4, 5, 5])]
console.log('arr=', arr) // [ 1, 2, 3, 4, 5 ]
// 两个对象是不相等的
// let set = new Set()
// set.add({})
// set.size // 1
// set.add({})
// set.size // 2

// .add .delete .has .clear 方法
s.add(1).add(2).add(2)
// 注意2被加入了两次
s.size // 2
s.has(1) // true
s.has(2) // true
s.has(3) // false
s.delete(2)
s.has(2) // false

// keys() values() entries()
// Set 没有键名，只有键值
let set = new Set(['red', 'green', 'blue'])
for (let item of set.keys()) {
  console.log(item)
}
// red
// green
// blue
for (let item of set.values()) {
  console.log(item)
}
// red
// green
// blue
for (let item of set.entries()) {
  console.log(item)
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
// 注意最后返回三个数组

// WeakSet
// WeakSet 的成员只能是对象，而不能是其他类型的值
const ws = new WeakSet()
ws.add(0)

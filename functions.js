// @ts-nocheck
// 参数为解构赋值
function foo({ x, y }) {
  console.log(x, y)
}
foo({ x: 1, y: 1 }) //1 1

// 默认参数应放在尾部
function show(x, y = 90) {
  console.log(x, y)
}
show(10) //10 90

//如果默认参数在非尾部位置
function other(x, y = 90, z) {
  console.log(x, y, z)
}
other(12, 34) //z为undefined
other(1, 2, 3) // 1 2 3
other(1, undefined, 3)
//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。

// context 作用域变化
var x = 1
function f(x, y = x) {
  console.log(y)
}
f(2) // 2 函数参数形成单独作用域

// 箭头函数中的this
//函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
function foo() {
  setTimeout(() => {
    console.log('id:', this.id)
  }, 100)
}
var id = 21
foo.call({ id: 42 })
// id: 42
//上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。
//this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。

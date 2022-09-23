// @ts-nocheck
// proxy的13个方法
// get()
let person = {
  name: 'jack',
}
let prox = new Proxy(person, {
  get: function (target, propKey) {
    if (propKey in target) {
      return target[propKey]
    } else {
      throw new ReferenceError('Prop name "' + propKey + '" does not exist.')
    }
  },
})

console.log('proxy.name=', prox.name)
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
// 方法用来拦截某个属性的赋值操作，可以接受四个参数，依
// 次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选
let validator = {
  set: function (target, propKey, propValue) {
    if (propKey == 'age') {
      if (!Number.isInteger(propValue)) {
        throw new TypeError('The age is not an Integer')
      }
      if (propValue < 0) {
        throw new Error('the age must > 0')
      }
      if (propValue > 200) {
        throw new RangeError('The age seems invalid')
      }
      target[propKey] = propValue
    }
  },
}
let per = new Proxy({}, validator)
per.age = 90
console.log('per.age=', per.age)

//apply()方法 拦截函数的调用、call和apply操作。
let target = function () {
  return 'I am the target'
}
let handler = {
  apply: function () {
    return 'I am the proxy'
  },
}
let p = new Proxy(target, handler)
console.log('p()=', p())

// 下面这些方法看名字就知道拦截的是啥了

// has()方法用来拦截HasProperty操作

// construct()

// deleteProperty()

// defineProperty()

// getOwnPropertyDescriptor()

// getPrototypeOf()

// isExtensible()

// ownKeys()

// preventExtensions()

// setPrototypeOf()

// Proxy.revocable()返回一个可取消的 Proxy 实例
target = {}
handler = {}
let { proxy, revoke } = Proxy.revocable(target, handler)
proxy.foo = 123
proxy.foo // 123
revoke()
proxy.foo // TypeError: Revoked

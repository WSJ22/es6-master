// Object.is => 比较两个值是否相等，相当于 ===
Object.is('foo','foo') // true
Object.is({}, {}) // false

// Object.assign =>合并
const target = {a:1}
const target1 = {b:2}
const target2 = {c:3}
Object.assign(target,target1,target2)
// target为目标对象，后面的都为参数，若后面存在相同的属性，则后面的会覆盖前面的

Object.getOwnPropertyDescriptor // 返回方法的描述
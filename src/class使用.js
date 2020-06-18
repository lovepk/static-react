console.log('class')

// 声明一个类第一种方法
function Persion (name, age) {
    this.name = name
    this.age = age
}

// 静态属性,直接挂载给构造函数的
Persion.info = 'sfs'
let persion = new Persion('faker', 24)
console.log(persion)
console.log(Persion.info)

Persion.prototype.say = function() {
    // 实例方法，每个实例对象都有的
    console.log('hello')
}

Persion.staticSay = function() {
    // 静态方法，只有构造函数才能访问
    console.log('构造函数上的静态方法')
}
console.log(Persion.staticSay)
persion.say()


// 声明一个类第二种方法
// class 内部声明构造器，静态属性，静态方法，实例方法
// class 实现对象本质上和使用构造函数实现，只是一种语法糖
class Animal {
    // 构造器的作用，每当new Animal的时候，最先执行构造器中的代码
    constructor (name, age) {
        this.age = name
        this.age = age
    }

    static info = '222'

    // 实例方法，每个实例对象都有的
    say() {
        console.log('实例方法')
    }

    // 静态方法
    static staticSay() {
        console.log('类的静态方法')
    }
}

let dog = new Animal('大黄', 2)
console.log(dog)
console.log(Animal.info)

dog.say()
console.log('面向对象继承')

// Persion 父类 可以理解为是American， Chinese共同指向的原型对象prototype
class Persion {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // 实例方法
    say() {
        console.log('hello')
    }
}

class American extends Persion{
   
}

const american1 = new American('Mike', 18)
console.log(american1)
american1.say()

class Chinese extends Persion {

}

const chinese = new Chinese('lixiaolong', 19)
console.log(chinese)
chinese.say()
console.log('class继承-super')

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
//    constructor() {}  //如果这样不使用super方法会报错，因为上面已经使用了extends，这里覆盖默认的构造函数时要手动super() 以继承父类的属性
    constructor(name, age) {
        // super其实是父类中构造器的引用，这里传入name，和age其实是为了执行父类的构造器
        super(name, age)
    }
}

const american1 = new American('Mike', 18)
console.log(american1)
american1.say()

class Chinese extends Persion {
    constructor(name, age, id) {
        super(name, age) // super必须最先执行，先把父类的构造器执行完，下面才能初始化当前类的属性
        this.IDNum = id
    }
}

const chinese = new Chinese('lixiaolong', 19, '12345*323')
console.log(chinese)
chinese.say()
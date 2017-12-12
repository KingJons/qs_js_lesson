// function Jons(name,haircut) {
//     this.name = name;
//     this.haircut = haircut;
// }

// Jons.prototype.hobbies = function() {
//     console.log('不管怎样，你开心就好');
// }
// var j = new Jons('小仙女','卷发');
// var j2 = new Jons('小仙女','直发');
// j.hobbies();
// j2.hobbies();

// 如何在多次new时，只得到一个对象 单例
// class new 

var Singleton = function(name) {
    this.name = name;
    // instanceof 实例
    this.instance = null;
}
// static 方法 静态方法 不需要new 可以在类上调用的
// 废掉constructor new
// 只能实例化一次
Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    
    return this.instance;
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
console.log(a.name);
console.log(b.name);
// a === b 引用式赋值
console.log(a == b);

class Singleton {
    constructor (name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name){
        if(!this.instance){
            this.instance = new Singleton(name);
        }

        return this.instance;
    }
}
// 继承
function extend (subClass,superClass){
    // 手术 子类拥有父类所有方法 prototype
    // prototype指向
    // 空类F 函数就是对象就是类
    var F = function(){}
    F.prototype = superClass.prototype;
    // console.log(F.prototype);
    // js 原型链prototype 对象会沿着原型链一直去查找
    // 自身对象是否有getName方法，如果没有，就会沿着这根链找其他的对象是否有这个方法
    // console.log(subClass.prototype);
    // console.log(subClass.prototype.constructor);
    subClass.prototype = new F();
    // 构造函数 subClass
    // constructor属性 对象完全是由prototype来指挥的
    // console.log(subClass.prototype);
    // console.log(subClass.prototype.constructor);
    // subClass.prototype.constructor = subClass;
    console.log(subClass.prototype.constructor);
    // 添加静态属性
    console.log(subClass);
    subClass.superclass = superClass.prototype;
    console.log(subClass.superclass);

}
// 人类
// Person 既是函数又是构造函数
// 函数是对象的一种，即可执行的对象
// 函数是一等对象  可以作为表达式
// var a = function(){}
// 高阶函数 形参 function func(cb){cd();}
// 返回值 返回一个函数 
// 基类
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}
// 子类
function Author(name,books){
    // 借
    // Author类里得到属性设置
    // this -> author 对象指向
    Person.call(this,name);
    this.books = books;

}
// Author.prototype.getName = function(){
//     return Person.prototype.getName.call(this);
// }
// Person prototype 方法 它都得有
// Person 的构造函数不能被改掉
extend(Author,Person);

Author.prototype.getBooks = function(){
    return this.books.join(',');
}
var ll = new Author('ll',['js','hbs','ms']);
console.log(ll.getName());
console.log(ll.getBooks());

// var lj = new Person('刘菁');
// console.log(lj.getName());
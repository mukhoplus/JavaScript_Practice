function User(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
}
User.prototype.getId = function(){
    return this.id;
}
User.prototype.getName = function(){
    return this.name;
}
User.prototype.getAge = function(){
    return this.age;
}
User.prototype.showUser = function(){
    return `-------------\nID: ${this.getId()}\nName: ${this.getName()}\nAge: ${this.getAge()}`;
}

module.exports = User;

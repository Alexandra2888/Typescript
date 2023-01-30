"use strict";
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const Brad = new Person2(1, 'Brad');
const Mike = new Person2(2, 'Mike');
console.log(Brad, Mike);

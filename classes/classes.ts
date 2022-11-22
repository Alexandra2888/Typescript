class Person {
    id: number
    name: string
    constructor() {
        console.log(123);
    }
}

//eg
class Person2 {
    id: number
    name: string
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const Brad = new Person2(1, 'Brad');
const Mike = new Person2(2, 'Mike');
console.log(Brad, Mike);

interface Person2Interface {
    id: number,
    name: string
    register():string
}

// class Person2 implements Person2Interface {
//     id: number
//     name: string
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//         register()
//     }
// }


//SUBCLASSES

//eg
// const Employee extends Person3 = {
//     positon: string,
//     constructor (id: number, name: string) {
//         super(id, name),
//             this.posiiton = position
//     }

// }
// const emp = new Employee(3, 'Shawn', 'Developer')
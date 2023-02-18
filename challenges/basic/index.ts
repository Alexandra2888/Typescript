//1
const myNum: number = 21;

//2
const myCat: string = "Daisy";

//3
// const myDog: string = 11;

//4
let passed: boolean = true || false;

//5
// let secret: boolean = 11;

//6
let language = new String('Typescript');
let len = language.length;

let lang: number = "Ts".length;

//7
let myAge = 18;

//8
let breed = 'Bichon';

//9
let lie = false;

//10
let numArr: number[] = [1, 2, 3, 4, 5];

//11
console.log(numArr[2]);

//12
let boolArr: boolean[] = [true, false];

//13
let myTuple: [string] = ['Typescript'];

//14
let numTuple: [number] = [12];

//15
let course1: [string, number] = ['CSS', 29.99];
console.log(course1[1]);

//16
 enum ProductNames {
    product1 = 'books',
    product2 = 'ipad',
    product3 = 'phone',
    product4 = 'laptop'
}
console.log(ProductNames);

//17
enum ProductId {
    Books = 1,
    Ipad = 2,
    Phone = 3,
    laptop = 4
}
console.log(ProductId);

//18
enum FavoriteProduct {
    Name = ProductNames.product4,
    Id = ProductId.laptop
}
console.log(FavoriteProduct);

//19
let age: number = 21;
if (age >= 21) console.log("Congratulations");

//20
//20.1
let searchHistory: string[] = [
    "how to make money online",
    "benefits of eating garlic",
    "html css tutorial",
    "calisthenics"
]

for (let searchItem of searchHistory) {
    searchItem.split(" ");
    for (let entry of searchItem) {
        if (entry === "html" || entry === "css") {
            console.log("")
        }
    }
}

//20.2
searchHistory.map((entry) => {
    if (entry.includes("html") || entry.includes("css")) {
        console.log("")
    }
})
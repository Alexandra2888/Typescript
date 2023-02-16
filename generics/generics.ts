// function getArray(items: any[]):any[]{
//     return new Array.concat(items)
// }
// let numArray = getArray([1, 2, 3, 4]);
// let strArray = getArray(['brad', 'john', 'gill']);
// numArray.push('hello');

// function getArray2<T>(items: T[]): T {
//     return new Array1().concat(items);
// }
// let numArray2 = getArray2<number>([1, 2, 3, 4]);
// let strArray2 = getArray2<string>(['brad', 'john', 'gill']);
// strArray2.push('hello');




//generic arrays
let number: number[] // => in generic arrays:
let numbers: Array<number> = [1, 2, 3];

let strings: Array<string> = ["a", "b", "c"];
let regularArr: number[] = numbers;
let boolValues: Array<boolean> = [true, false];
let nestedarr: Array<Array<number>> = [[1, 2], [3, 4]];
let mixedArray: Array<string | number> = [1, "Hi"];



//generic functions
function getArrayItem<T>(item: Array<T>): T {
    return item[2];
}
let number1 = getArrayItem<number>([1, 2, 3, 4, 5]);
console.log(number1);

let someStr = getArrayItem<string>(["Hi", "Hey", "Hello", "There"]);
console.log(someStr);

let someBool = getArrayItem<boolean>([true, false]);
console.log(someBool);


//generic object types
type Cover<T> = {
    front: T,
    back:T
}
const bookCover: Cover<string> = {
    front: "book name",
    back:"author biography"
}

const bookCover2: Cover<number> = {
    front: 15,
    back:17
}

type Product6<T1, T2> = {
    name: T1,
    price:T2
}
const product6: Product6<string, number> = {
    name: "Ts",
    price:10.99
}
const product7: Product6<string, string> = {
    name: "Ts",
    price:"Not available"
}

const product8: Product6<number, number> = {
    name: 12,
    price:10.99
}



//generic function inference
function getArrayLength<T>(elements: T[]): number {
    return elements.length;
}

let arrLength = getArrayLength([1, 2, 3]);
console.log(arrLength);


//generic function types
type Functype<T> = (elements: T[]) => number;
let getArrayLength1: Functype<number> = (elements) => {
    return elements.length;
}
let arrLength1 = getArrayLength([1, 2, 3]);
console.log(arrLength1);



//generic sets
let mySet = new Set([1, 2, 3]);
mySet.add(4);
console.log(mySet);
console.log(mySet.has(5));

let mixedData: Set<string | number> = new Set(["Hi", 1]);
// let myArr: (string | number)[] = mixedData;  //Type 'Set<string | number>' is missing the following properties from type '(string | number)[]': length, pop, push, concat, and 21 more.
// let mySet2: Set<number> = [1, 2, 3];  //Type 'number[]' is missing the following properties from type 'Set<number>': add, clear, delete, has, and 2 more.
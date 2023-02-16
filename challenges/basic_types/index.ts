//1
function productId(): string | number {
    return 112233
}
let id: string | number = productId() //112233

//2
// function productId(): string | number {
//      return 112233
// }
// let id: number = productId() //type error
// number = string | number <= wrong


//3
function productId2(): number {
    return 112233;
}

let id3: string | number = productId2();    //112233
//string  | number = number


//4
type BooValues = true | false;

//5
// type Score = number;
// let avgScore: string = "11.50";
// let score1: Score = avgScore; //Type 'string' is not assignable to type 'number'

//6
type Score = number;
let avgScore2: number = 11.50;
let score2: Score = avgScore2; //number

//7
// function courseName1(): string {
//     return "Ts";   //Ts is a value
// }
// let typeScript: "Ts" = courseName1;   //Ts is a type
//Type '() => string' is not assignable to type '"Ts"'


//8
type BookType = "And the mountains Echo" | "The Kite Runner" | "A thousand";
let favBook: BookType = "The Kite Runner";

//9
// type BookType1 = "And the mountains Echo" | "The kite Runner" | "A thousand";
// let favBook1: BookType = "The Shining";  //'"The Shining"' is not assignable to type 'BookType'


//10
// let bool: true = false;  //Type 'false' is not assignable to type 'true'
//true = type and false is also a type => you can't assign type true to type false

//11
function multiply1(n: number): number {
    return n * n;
}
const result: (n: number) => number = multiply1;
result(11); //121


//12
// function addition(n: number): number {
//     return n + n;
// }
// const result1: (n: number) => string = multiply1;
// result1(11);
 //Type '(n: number) => number' is not assignable to type '(n: number) => string'. Type 'number' is not assignable to type 'string'
 //first function types doesn't match and second return types doesn't match


 //13
function myStr1(arg: string | number | boolean): string {
    return arg.toString();
}
 
//14
function boolInverted(arg: boolean): boolean {
    return !arg;
}

//15
  function addOrSubtract(
  num: number,
  operation: "add" | "subtract" | "do nothing"
): number {
  if (operation === "add") {
    return num + 1;
  } else if (operation === "subtract") {
    return num - 1;
  } else {
    return num;
  }
}
// let result = addOrSubtract(10, "add");
// let result = addOrSubtract(10, "subtract");
// let result = addOrSubtract(10, "do nothing");
// let result = addOrSubtract(10, "whatever");
console.log(result);


//16
// function someFunc() { }
// const myNum1: number = someFunc();   //Type 'void' is not assignable to type 'number'


//17
function callAnotherFunc(func: (price: number, course: string) => string) {
    return func(10.99, "Ts")
}
let caller = callAnotherFunc((price, course) => `The ${course} has aprice of ${price}`);
console.log(caller);


//18
type SomeFunc = () => string;
const result1: SomeFunc = () => "Ts Bootcamp";
result1();

//19
type Employee1 = {
    name: string,
    age: number,
    job:string
}
const employee1: Employee1 = {
    name: 'a',
    age: 18,
    job: 'dev'
}

//20
type OnlineCourse = {
    name: string,
    platform: string,
    features: string[],
    "meta-data": {
        published: boolean
    }
}
let myCourse: OnlineCourse = {
    name: "Ts Bootcamp",
    platform: "Udemy",
    features: ["practical", "exercise oriented", "modern Ts concepts"],
    "meta-data": {
            published: true
        }
}

//method 1
myCourse["meta-data"].published;

//method 2
myCourse["meta-data"]["published"];

//21
type Product1 = {
    name: string,
    publishStatus?: boolean
}
const product2: Product1 = { name: "Ts Bootcamp"};
const product3: Product1 = { name: "Ts Bootcamp", publishStatus: true };

//22
const onlineCourse = { name: "Ts Bootcamp", price: 10.99 };
const product4 = { ...onlineCourse, released: true };
console.log(product4);
//{name:..., price:..., released:...}


//23

//method 1
type Product2 = {
    holidaySales: () => string
}

//method 2
type Product3 = {
    holidaySales():string 
}

const product5: Product3 = {
    holidaySales: () => "Sale is on"
}

product5.holidaySales();

//24

//method 1
function getName(arg: { name: string }): string {
    return arg.name;
}
getName({ name: "L" });

//method 2 destructuring
function getName2({ name }: { name: string }): string {
  return name;
}
let employee2 = getName({ name: "Layla" });
console.log(employee);
getName({ name: "L" });


//25
function isOnline({online} : { online: boolean }): boolean {
    return online
}
isOnline({ online: true });


//26
// let vague: number | undefined = null; //Type 'null' is not assignable to type 'number | undefined'

//27
// let vague2: boolean | undefined = true ? true : undefined;
// let vague3: boolean = vague2;  //Type 'boolean | undefined' is not assignable to type 'boolean'.Type 'undefined' is not assignable to type 'boolean'.



//28
let vague4: string | undefined = undefined; //undefined

//29
let vague5: boolean | undefined = true ? true : undefined;
// let vague5:boolean | undefined = true ? undefined : true;
let vague6: boolean;
if (vague5 === undefined) {
    vague6 = false
} else {
    vague6 = true
}

//first one: true
//second one:undefined


//30
function nullNarrow(arg: string | undefined): number | undefined {
  if (typeof arg === "undefined" || isNaN(parseInt(arg))) {
    return undefined;
  } else {
    return parseInt(arg);
  }
}

console.log(nullNarrow("some value"));
console.log(nullNarrow("32"));
//Argument of type 'number' is not assignable to parameter of type 'string'.
//console.log(nullNarrow(32));
console.log(nullNarrow(undefined));
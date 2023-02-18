//conditional narrowing <= type guard
type Item = { productName: string };
function itemOrItems(item: Item | Item[]) {
    if (Array.isArray(item)) {
        return item.length;
    } else {
        return item.productName;
}
}
console.log(itemOrItems({ productName: "Ts" }));
console.log(itemOrItems([{ productName: "Ts" }, { productName: "Js" }]));



//object narrowing
type MagazineInfo = {
    name: string,
    author: string,
    sales: number,
    internationa: boolean,
    price: number,
    publicationYear:number
}

let magazine: MagazineInfo = {
    name: "Health unleased",
    author: "JohnDoe",
    sales: 111,
    internationa: true,
    price: 10.99,
    publicationYear: 2025
}

type MagazineName = {
    name:string
}
let magazineName: MagazineName = magazine;


//type guards
//1. typeof operator
function getProductPrice(product: string | number): number {
    if (typeof product === "string") {
        return parseInt(product);
    } 
    return product;
}

const coursePrice = getProductPrice(10);
console.log(coursePrice);

//2. instanceof
let newDate = new Date();
if (newDate instanceof Date) {
    console.log("succes");
} else {
    console.log("failure");
}


//3. specific value check
let someValue = null;
if (someValue === null) {
    console.log("success");
} else {
    console.log("failure");
}


//4. truthy/ falsy check
let anyValue = true;
if (!anyValue) {
    console.log("success");
} else {
    console.log("failure");
}


//5. built-in method
let someArr = [1, 2, 3];
if (Array.isArray(someArr)) {
    console.log("success");
} else {
    console.log("failure");
}


//6. property presence check
let someObj = { name: "Ts" }; 
if ("price" in someObj) {
    console.log("success");
} else {
    console.log("failure");
}



//type widening <= type inference
let object = "Ts";
object = "Js";
let price = 10.00;
price = 9.99;



type Object7 = {
    name: "Ts",   // it's not a string Ts (a value), it's a type Ts
    price:number
}

function courseName1(course: Object7) {
    return course.name;
}

const course = {
    name: "Ts" as const,
    price: 10.99
}
courseName1(course);
//Argument of type '{ name: string; price: number; }' is not assignable to parameter of type 'Object7'.
  //Types of property 'name' are incompatible.
   // Type 'string' is not assignable to type '"Ts"'.
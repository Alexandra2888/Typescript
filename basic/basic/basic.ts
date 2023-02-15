//void
function printHello() {
    console.log("Hello");
}
printHello();

let productCategory: string;
let shoppingCart = (category: string): void => {
    productCategory = category;
}

console.log(shoppingCart("T-Shirt"));

//let movieName:void = 122;


//never
// function chatFeed():never {
//     while (true) {
//         //grab messages and display them on the screen
//     }
// }

// chatFeed()
// console.log("Chat disconnected");


// null & undefined
let discount: number;

function specialDiscount(holidaySeason: boolean): number {
    if (holidaySeason) {
        return (discount = 0.25);
    } else {
        return (discount = 0.15);
    }
}
specialDiscount(true);
specialDiscount(false);

//nullability
let notSure1: undefined = undefined;
// let notSure2: undefined = null;
// let notSure3: undefined = 123;
// let notSure4: undefined = '123';

//union type
let notSure5: undefined | number = 5;
let notSure6: undefined | number = undefined;
// let notSure7: undefined | number = null;


//type aliases
// type CourseDiscounts = number;
// let courseDiscounts: CourseDiscounts = 25;

//literal type:
type CourseDiscounts = 25 | 35 | 45 | 75;
let courseDiscounts: CourseDiscounts = 25;

type TSCourse = 'TS';
let courseName: TSCourse = 'TS';

//create type of an object
type MYcourses = {
    name: string;
    price: number;
}

const tsCourses = {
    name: 'TS Bootcamp',
    price: 10.99
}

const jsCourse = {
    name: 'Js Bootcamp',
    price: 9.99
}


//recursive types
type NestedArray = number | NestedArray[];
const numbers1: NestedArray = [1, [2]];
const numbers2: NestedArray = [1, [2, 3, [4, 5, [6, 7, 8, [9, 10]]]]];


//tytpe assertion (casting)
type Employee = {
    id: number;
    name: string;
    department: string;
}

const employee: Employee = {
    id: 1,
    name: "Scott",
    department: "Design"
}
const hiredEmployee = JSON.stringify(employee);
console.log(typeof hiredEmployee);

function getEmployeeInfo(employeeObject: string) {
    // return JSON.parse(employeeObject);

    //old method
    // return (<Employee> JSON.parse(employeeObject));

    //new method
    return JSON.parse(employeeObject) as Employee;
}


//union type
let firstPassword: number | string = 123;
let firstPassword1: number | string = '123';

let tip = (billAmount: number, tipPercentage: string | number): number => {
    if (typeof tipPercentage === "number") {
        return billAmount * tipPercentage
    } else {
        let calculateTip: number = billAmount * (parseInt(tipPercentage) / 100);
        return calculateTip;
    }
}
let tipAmount = tip(100, 0.15);
let tipAmount2 = tip(100, "20 percent");


//literal types
let myNumber: 45 = 45;
let myStr: "Holiday" = "Holiday";
let courseDiscounts1: 25 | 35 | 45 | 75;   //a union of type numbers

let tip2 = (billAmount: number, tipPercentage: 0.15 | 0.2 | 0.25): number => {
    if (typeof tipPercentage === "number") {
        return billAmount * tipPercentage
    } else {
        let calculateTip: number = billAmount * (parseInt(tipPercentage) / 100);
        return calculateTip;
    }
}

type FrontEndWebDev = "HTML" | "CSS" | "Javascript" | "React";  //a union of literal types
let frontEndWebDev: FrontEndWebDev = "Javascript";


//intersection type
type ProductProperties = {
    id: number;
    category: string;
    name: string;
    price: number;
    stock: number;
}

type ProductDiscounts = {
    discounts(): void;
}

type ProductSeasonalSales = {
    holidaySales(): void;
}

type ProductSubscription = {
    subscription(): void;
}

type ProductShipping = {
    shipping(): void;
}

type Product = ProductProperties & ProductDiscounts & ProductSeasonalSales & ProductShipping & ProductSubscription;
const product: Product = {
    id: 1,
    category: "Hardware",
    name: "Alan Wrench",
    price: 12.99,
    stock: 0,
    
    discounts: () => {},
    holidaySales: () => {},
    subscription: () => { },
    shipping:() => {}
}

//function type
let productName: Function;
productName = (product: string): string => {
    return product;
}

//or
let productName1: (product: string) => string;
productName1 = (product) => {
    return product;
}

//optional parameters
let productName2: (product: string, price?: number) => string;
productName2 = (product, price) => {
    return `${product}, ${price}`;
}


//default parameters
let productName3: (product: string, price?: number) => string;
productName2 = (product, price = 10.99) => {
    return `${product}, ${price}`;
}


//object type
const product1: {
    name: string,
    price: number,
    level:string
} = {
    name: 'Ts',
    price: 10.99,
    level:"Beginner"
}

//or
// type Product = {
//   name: string;
//   price: number;
//   readonly level: string;
//   released?: boolean;
//   // released: boolean;
// };

// const product: Product = {
//   name: "TS",
//   price: 10.99,
//   level: "Beginner",
//   // released: true,
// };

// // product.level = "Intermediate";
// product.released = true;
// console.log(product);

// let onlineCourse: Product = {
//   name: "JS",
//   price: 9.99,
//   level: "Beginner",
// };


//literal object type
function studentDB({fullName}: { fullName: string }): string {
    return fullName;
}
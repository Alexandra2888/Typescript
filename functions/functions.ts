
function addTwo(num: number) {
    return num + 2
}
addTwo(5);

function getUpper(val: string) {
    return val;
}
getUpper("two");

// function signUpUser(name: string, email: string, password: string, isPaid: boolean) {

// }
// signUpUser('Alex', 'a@a.gmail.com', '1232', true);

// let loginUser = (name: string, email: string, isPaid: boolean) => { }
// loginUser('h', 'h@h', false)


// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//     return true
//     }
//     return "200 OK"
// }


// const gethello = (s: string): string => {
//     return ''
// }

// const heros = ['thor', 'spiderman', 'ironman'];
// heros.map((hero): string => {
//     return `hero is &{hero}`
// })

function consoleError(errorMessage: string): void {
    console.log(errorMessage);
}

function handleError(errorMessage: string): never {
    throw new Error(errorMessage)
}

//eg
function addNum(x: number, y: number) {
    return x + y;
}
console.log(addNum(1, 2));


//function declaration
function holidaySales(product: string, sales: number, tax: number, discount: number): number {
    let price: number = 0;
    if (product === "sunglasses1") price = 29;
    if (product === "hats1") price = 19;
    if (product === "shoes1") price = 59;

    let totalSalesForIndividualProduct: number = price * sales;

    return  totalSalesForIndividualProduct - tax * totalSalesForIndividualProduct - discount * totalSalesForIndividualProduct
}

const sunglasses1: number = holidaySales("sunglasses1", 20, 0.15, 0.25);
console.log(`The total profit from the sales of sunglasses is $${sunglasses1}`);


//function expression
let holidaySales1 = function (
    product: string,
    sales: number,
    tax: number,
    discount: number
): number {
    let price: number = 0;

    if (product === "pens") price = 29;
    if (product === "erasers") price = 19;
    if (product === "pencils") price = 59;

    let totalSalesforIndividualProduct: number = price * sales;

    return (
        totalSalesforIndividualProduct -
        tax * totalSalesforIndividualProduct -
        discount * totalSalesforIndividualProduct
    );
};

const pens: number = holidaySales1("pens", 20, 0.15, 0.25);
const erasers: number = holidaySales1("erasers", 15, 0.12, 0.15);
const pencils: number = holidaySales1("pencils", 50, 0.08, 0.45);

console.log(`The total profit from the sales of pens is $${pens}`);
console.log(`The total profit from the sales of erasers is $${erasers}`);
console.log(`The total profit from the sales of pencils is $${pencils}`);



//arrow functions
let holidaySales2 = (
    product: string,
    sales: number,
    tax: number,
    discount: number
): number => {
    // let department: string = "Tech";

    let price: number = 0;

    if (product === "laptops") price = 900;
    if (product === "monitors") price = 350;
    if (product === "keyboard") price = 25;

    let totalSalesforIndividualProduct: number = price * sales;

    return (
        totalSalesforIndividualProduct -
        tax * totalSalesforIndividualProduct -
        discount * totalSalesforIndividualProduct
    );
};

const laptops: number = holidaySales2("laptops", 20, 0.15, 0.25);
const monitors: number = holidaySales2("monitors", 15, 0.12, 0.15);
const keyboard: number = holidaySales2("keyboard", 50, 0.08, 0.45);

console.log(`The total profit from the sales of laptops is $${laptops}`);
console.log(`The total profit from the sales of monitors is $${monitors}`);
console.log(`The total profit from the sales of keyboard is $${keyboard}`);

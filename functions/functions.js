"use strict";
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val;
}
getUpper("two");
function consoleError(errorMessage) {
    console.log(errorMessage);
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function holidaySales(product, sales, tax, discount) {
    let price = 0;
    if (product === "sunglasses1")
        price = 29;
    if (product === "hats1")
        price = 19;
    if (product === "shoes1")
        price = 59;
    let totalSalesForIndividualProduct = price * sales;
    return totalSalesForIndividualProduct - tax * totalSalesForIndividualProduct - discount * totalSalesForIndividualProduct;
}
const sunglasses1 = holidaySales("sunglasses1", 20, 0.15, 0.25);
console.log(`The total profit from the sales of sunglasses is $${sunglasses1}`);
let holidaySales1 = function (product, sales, tax, discount) {
    let price = 0;
    if (product === "pens")
        price = 29;
    if (product === "erasers")
        price = 19;
    if (product === "pencils")
        price = 59;
    let totalSalesforIndividualProduct = price * sales;
    return (totalSalesforIndividualProduct -
        tax * totalSalesforIndividualProduct -
        discount * totalSalesforIndividualProduct);
};
const pens = holidaySales1("pens", 20, 0.15, 0.25);
const erasers = holidaySales1("erasers", 15, 0.12, 0.15);
const pencils = holidaySales1("pencils", 50, 0.08, 0.45);
console.log(`The total profit from the sales of pens is $${pens}`);
console.log(`The total profit from the sales of erasers is $${erasers}`);
console.log(`The total profit from the sales of pencils is $${pencils}`);
let holidaySales2 = (product, sales, tax, discount) => {
    let price = 0;
    if (product === "laptops")
        price = 900;
    if (product === "monitors")
        price = 350;
    if (product === "keyboard")
        price = 25;
    let totalSalesforIndividualProduct = price * sales;
    return (totalSalesforIndividualProduct -
        tax * totalSalesforIndividualProduct -
        discount * totalSalesforIndividualProduct);
};
const laptops = holidaySales2("laptops", 20, 0.15, 0.25);
const monitors = holidaySales2("monitors", 15, 0.12, 0.15);
const keyboard = holidaySales2("keyboard", 50, 0.08, 0.45);
console.log(`The total profit from the sales of laptops is $${laptops}`);
console.log(`The total profit from the sales of monitors is $${monitors}`);
console.log(`The total profit from the sales of keyboard is $${keyboard}`);

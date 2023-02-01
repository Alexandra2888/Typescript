"use strict";
const myNum = 21;
const myCat = "Daisy";
let passed = true || false;
let language = new String('Typescript');
let len = language.length;
let lang = "Ts".length;
let myAge = 18;
let breed = 'Bichon';
let lie = false;
let numArr = [1, 2, 3, 4, 5];
console.log(numArr[2]);
let boolArr = [true, false];
let myTuple = ['Typescript'];
let numTuple = [12];
let course = ['CSS', 29.99];
console.log(course[1]);
var ProductNames;
(function (ProductNames) {
    ProductNames["product1"] = "books";
    ProductNames["product2"] = "ipad";
    ProductNames["product3"] = "phone";
    ProductNames["product4"] = "laptop";
})(ProductNames || (ProductNames = {}));
console.log(ProductNames);
var ProductId;
(function (ProductId) {
    ProductId[ProductId["Books"] = 1] = "Books";
    ProductId[ProductId["Ipad"] = 2] = "Ipad";
    ProductId[ProductId["Phone"] = 3] = "Phone";
    ProductId[ProductId["laptop"] = 4] = "laptop";
})(ProductId || (ProductId = {}));
console.log(ProductId);
var FavoriteProduct;
(function (FavoriteProduct) {
    FavoriteProduct["Name"] = "laptop";
    FavoriteProduct[FavoriteProduct["Id"] = 4] = "Id";
})(FavoriteProduct || (FavoriteProduct = {}));
console.log(FavoriteProduct);
let age = 21;
if (age >= 21)
    console.log("Congratulations");
let searchHistory = [
    "how to make money online",
    "benefits of eating garlic",
    "html css tutorial",
    "calisthenics"
];
for (let searchItem of searchHistory) {
    searchItem.split(" ");
    for (let entry of searchItem) {
        if (entry === "html" || entry === "css") {
            console.log("");
        }
    }
}
searchHistory.map((entry) => {
    if (entry.includes("html") || entry.includes("css")) {
        console.log("");
    }
});

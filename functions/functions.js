"use strict";
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val;
}
getUpper("two");
function signUpUser(name, email, password, isPaid) {
}
signUpUser('Alex', 'a@a.gmail.com', '1232', true);
let loginUser = (name, email, isPaid) => { };
loginUser('h', 'h@h', false);
const gethello = (s) => {
    return '';
};
const heros = ['thor', 'spiderman', 'ironman'];
heros.map((hero) => {
    return `hero is &{hero}`;
});
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

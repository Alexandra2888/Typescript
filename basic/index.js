"use strict";
//  user = {
//     name: 'Alex',
//     email: 'a@a.gmail.com'
// }
// console.log('Alex');
// console.log(user.name);
exports.__esModule = true;
var greetings = 'Hello';
console.log(greetings);
var userId = 12;
var isLoggesIn = false;
// let hero: string;
// function getHero() {
//     return 'thor'
// }
// hero = getHero();
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
var loginUser = function (name, email, isPaid) { };
loginUser('h', 'h@h', false);
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//     return true
//     }
//     return "200 OK"
// }
var gethello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "hero is &{hero}";
});
function consoleError(errorMessage) {
    console.log(errorMessage);
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
var User = {
    name: 'Alex',
    email: 'a@a.gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "A", isPaid: false };
createUser(newUser);
function createCourse() {
    return { name: "angular", price: 100 };
} //function that returns an object
var myUser = {
    _id: "2233",
    name: "a",
    email: "a@a.gmnail.com",
    isActive: false
};
myUser.email = "b.b@gmail.com";

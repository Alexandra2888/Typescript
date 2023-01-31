"use strict";
let num1 = 10;
let num2 = 5;
let num3 = 15;
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
}
else {
    console.log(`${num1} is less than ${num2}`);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let nums = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
let mixData = ['Cosmos', 13, 50, 'Star'];
for (let [i, item] of mixData.entries())
    console.log(`${i}-${item}`);
let data = ['Cosmos', 13, 50, 'Star'];
for (let dataPoint in data) {
    console.log(dataPoint);
    console.log(typeof dataPoint);
    console.log(typeof +dataPoint);
    console.log(`${+dataPoint + 1}-${data[dataPoint]}`);
}

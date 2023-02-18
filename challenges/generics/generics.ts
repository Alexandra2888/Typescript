//1.
let myArr1: Array<string> = ["a", "b", "c"];


//2.
let myBool: Array<boolean> = [true, false];

//3.
let multiArr: Array<Array<string>> = [["1", "2"], ["a", "b"]];

//4.
function myGenericFunc(): Array<number> {
    let numArr = [];
    numArr.push(15);
    numArr.push(35);
    return numArr;
} 

//5.
function someArrc(): Array<Array<number>> {
    let numArr = [];
    numArr.push([15]);
    numArr.push([35]);
    return numArr;
} 

//6.
function anyStr(): Array<Array<string>> {
    let strArray = [];
    strArray.push(["Ts"]);
    strArray.push(["Js", "Java"]);
    return strArray;
}

//7.
let hugeArr: Array<Array<Array<Array<string | number>>>> = [[[[1, 2], ["C#"], ["Js", "Java"], ["HTML", "CSS", "Ts"]]]];
hugeArr[0][0][3][2];

//8.
function returnArg<T>(elements: T): T {
    return elements;
}
returnArg("Ts");
returnArg(124);
returnArg(true);

//9.
function returnLength<T>(elements: T[]): number {
    return elements.length;
}
returnLength(["HTML", "CSS"]);
returnLength([1, 2, 3, 4]);
returnLength([true, false, 1, 10, "a"]);


//10.
function arrStr<T>(elements: Array<T>):T {
    return elements[4]
}
arrStr(['a', 'b', 'c']);


//11.
function lastItem<Elements>(elements: Array<Elements>):Elements {
    return elements[elements.length - 1];
}
lastItem<number>([1, 2, 3]); //3
lastItem<boolean>([true, false]);  //false
lastItem<string>(["hey", "hi"]);  //hi


//12.
type AirConditioner<T> = {
    winter: T,
    summer: T
}

const myAC: AirConditioner<string> = {
    winter: "warm",
    summer: "cold"
}

//13.
type MobilePhone<T1, T2, T3> = {
    manufacturer: T1,
    model: T2,
    rating:T3
}

const myMB: MobilePhone<string, string, number> = {
    manufacturer: "Samsung",
    model: "S10",
    rating: 4.99
}
const phoneSpecs: (string | number | boolean)[] = [myMB.manufacturer, myMB.model, myMB.rating];
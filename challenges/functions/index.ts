//1
function multiply (a: number, b: number):number {
    return a * b;
}

//2
// multiply(2, "3");

//3
function emailList(email: string):string {
    return email;
}
// emailList(5);

//4
// function mySum(s: number, t: boolean): number {
//     return s + t
// }


//5
let pluralize = function (str:string):string {
    return str + "s";
}
pluralize("cake");

//6
function decideOPeration(num:number, bool:boolean):number {
    if (bool) {
        return num + 1;
    }
    return num - 1;
}

decideOPeration(10, true);
decideOPeration(10, false);

// bool ? num + 1 : num -1;

//7
function myArr2(arr: number[]):number[] {
    return arr;
}
myArr2([1, 2, 3]);
// myArr2([1, '2', 3]); //type eror

function addTwo(num: number) {
    return num + 2
}
addTwo(5);

function getUpper (val: string) {
    return val;
}
getUpper("two");

function signUpUser(name: string, email:string, password:string, isPaid: boolean){

}
signUpUser('Alex', 'a@a.gmail.com', '1232', true);

let loginUser = (name: string, email: string, isPaid: boolean) => { }
loginUser('h', 'h@h', false)


// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//     return true
//     }
//     return "200 OK"
// }


const gethello = (s: string): string => {
    return ''
}

const heros = ['thor', 'spiderman', 'ironman'];
heros.map((hero): string => {
    return `hero is &{hero}`
})

function consoleError(errorMessage: string): void {
    console.log(errorMessage);
}

function handleError(errorMessage:string):never {
throw new Error(errorMessage)
}
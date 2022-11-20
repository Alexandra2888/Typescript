const User = {
    name: 'Alex',
    email: 'a@a.gmail.com',
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }
let newUser = { name: "A", isPaid: false };
createUser(newUser);


function createCourse(): {name: string, price: Number} {
    return {name: "angular", price: 100}
}  //function that returns an object


// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }


// type MyString = string;

// function getUser(user: User): User {
//     return { name: "", email: "", isActive: true }
//  }

// getUser({ name: "", email: "", isActive: true })



// type User = {
//    readonly _id: string,
//     name: string,
//     email: string,
//     isActive: boolean,
//     creditCardDetails?: number
// }

// let myUser: User = {
//     _id: "2233",
//     name: "a",
//     email: "a@a.gmnail.com",
//     isActive: false,
// }



// myUser.email = "b.b@gmail.com"
 //myUser._id = "122"

// type cardNumber = {
//     cardNumvber : string
// }

// type cardDate = {
//     cardDate: string
// }

// type cardDetails = cardNumber & cardDate & {
//     cvv: number
// }

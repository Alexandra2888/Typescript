let score: number | string = 33;
score = '33'

type User = {
    name: string,
    id: number
}

type Admin = {
    id: number,
    username: string
}


// let person : User | Admin = { name: 'a', id: 334}

// function getDBId(id: number | string) {
//     // some API calls
//     console.log(`DB ID is ${id}`);
// }

// getDBId(2);
// getDBId('3');
// function getDBId(id: number | string) {
//    id.toLowerCase()
// }


//eg
let id2: number | string;
id2 = 2;
id2 = "2";

//eg
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Up);  //0

// let score: number | string = 33
// score = 44
// score = "55"


// type User = {
//     name: string;
//     id: number
// }

// type Admin = {
//     username: string;
//     id: number
// }

// let hitesh: User | Admin = {name: "hitesh", id: 334}

// hitesh = {username: "hc", id: 334}

//  function getDbId(id: number | string){
//      making some API calls
//      console.log(`DB id is: ${id}`);

//  }
// getDbId(3)
// getDbId("3")

// function getDbId(id: number | string){
//     if (typeof id === "string") {
//         id.toLowerCase()
//     }

// }

 //array

// const data: number[] = [1, 2, 3]
// const data2: string[] = ["1", "2", "3"]
// const data3: (string | number | boolean)[] = ["1", "2", 3, true]

// let seatAllotment: "aisle" | "middle" | "window"

// seatAllotment = "aisle"
 // seatAllotment = "crew"
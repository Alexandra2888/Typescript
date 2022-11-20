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


let person : User | Admin = { name: 'a', id: 334}

// function getDBId(id: number | string) {
     //some API calls
//     console.log(`DB ID is ${id}`);
// }

// getDBId(2);
// getDBId('3');
// function getDBId(id: number | string) {
//    id.toLowerCase()
// }
interface UserInterface {
    id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

//eg
type Point = number | string;
const p1: Point = 1;

//but
// interface Point = number | string;
// const p2: Point = 1;
// error


//eg
interface MathFunc {
    (x: number, y: number | number)
}
const add: MathFunc = (x: number, y: number): number => x + y;
//1.
function productView(arg: number | true):boolean {
    if (arg > 0 || arg === true) {    //true = type
        return true;                  //true = boolean value
    } else {
        return false;
    }
}

 //!!!!!!!!!!!!!!!!!!!!!!!
 const passed2:true= true //it's no longer a value, it's a literal type !!!!!!!!!


//shorter version with ternary operator:
function productView2(arg: number | true): boolean {
    return arg === true ? true : arg > 0;
}


//2. 
type Empl = {
    name: string;
}

function myFunc(empOrEmployees: Empl | Empl[]) {
    if (Array.isArray(empOrEmployees)) {
        return empOrEmployees.length;
    } else {
        return empOrEmployees.name;
    }
}


//3.
type Emp = {
    name: string,
    positionTitle:string,
    age: number,
    hired:boolean
}

const nameHiring: Emp = {
    name: 'Bill',
    positionTitle: " Junior dev",
    age: 24,
    hired: true
}

type EmployeeName = {
    name: string
}

const employeeName: EmployeeName = nameHiring;
console.log(employeeName);     //whole object
console.log(employeeName.name); //"Bill"
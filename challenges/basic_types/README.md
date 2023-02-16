1. What will be function invocation result?
2. What will the invocation result?
3.  What will the invocation result?
4. Create a custom type and assign it both of the boolean values.
5. What will be the value for this variable score?
```
type Score = number;
let avgScore:string = "11.50";
let score:Score = avgScore;
```

6. What will be the value of the variable score?
```
type Score = number;
let avgScore:string = 11.50;
let score:Score = avgScore;
```

7. What will be the following function invocation result in?
```
function courseName():string {
    return "Ts";
}
let typeScript:"Ts" = courseName;
```

8. What will be the result of the variable favBook?
```
type BookType = "And the mountains Echo" | "The kite Runner" | "A thousand";
let favBook:BookType = "The Kite Runner";
```

9. Guess what the value of the favourite book will be.
```
 type BookType1 = "And the mountains Echo" | "The kite Runner" | "A thousand";
 let favBook1: BookType = "The Shining";  //'"The Shining"' is not assignable to type 'BookType'
```

10. What is going to be the assignment of false to bill?
```
let bool:true = false;
```

11. What will be the function invocation result?
```
function multiply(n:number):number {
  return n * n;
}
const result: (n:number) => number = multiply;
```

12. What will be function invocation result?
```
function addition(n:number):number {
    return n + n;
}
const result:(n:number) => string = result;
result(11);
```

13. Create a function that can accept a number, a string and a boolean but returns a string.

14. Create a function that returns an inverted boolean value.

15. Create a function that either adds one to a number or subdtracts one from a number or does nothing to the number and it just returns a number based on a condition.

16. What will the function invocation result end?
```
function someFunction() {}
const myNum:number = someFunc();
```

17. What will the function invocation result?
```
function callAnotherFunc(func:(price:number, course:string) => string) {
    return func(10.99, "Ts")
}
let caller = callAnotherFunc((price, course) => `The ${course} has a ${price}`);
console.log(caller);
```

18. Write a type for this function that accepts no parameters and returns a string.
```
const result:someFunc = () => "Ts Bootcamp"
```

19. Create an object and give it three properties.
20. We need to access the published property from this object using both the bracket and dot notation.
```
type OnlineCourse = {
    name:string,
    platform:string,
    features:string[],
    "meta-data": {
        published:boolean
    }
}
let myCourse:OnlineCourse = {
    name:"Ts Bootcamp",
    platform:"Udemy",
    features:["practical,"exercise oriented"],
    "meta-data": {
        published:true
    }
}
```

21. Fix the error with the following code by modifying this type without bringing any kind of changes to product two and product three.
```
type Product = {
    name:string,
    publishStatus:boolean
}
const product1:Product = {name:"Ts Bootcamp"};
const product2:Product = {name:"Ts Bootcamp", publishStatus:true};
```

!!! In the context of objects, when we type adnotate any property, that type adnotation does not refer to the object key, it refers to the object value!!


22. What will be the product4 object log in the console?
```
const onlineCourse = {name:"Ts Bootcamp", price:10.99};
const product4 = {...onlineCourse, released:true};
```

23. Create a product type and add a holiday method to it that returns the string "sale".

24. Create a function that accepts a literal object and it returns the name property of that object.
25. Create a function that takes anobject type with one property which is online and the type is boolean for that property as its argument.
26. What is going to be the result of this variable asignment?
```
let vague:number | undefined = null;
```

27. What is going to be the result of the second variable asignment (vague3)?
```
let vague2:boolean | undefined = true ? true: undefined;
let vague3:boolean = vague2;
```

28. What is going to be the result of the following variable assignment?
```
let vague4:string | undefined = undefined;
```

29. What is the value of vague6 as a variable and check when vague5 has boolean or undefine values.
```
let vague5:boolean | undefined = true ? true : undefined;
let vague5:boolean | undefined = true ? undefined : true;
let vague6:boolean;
if (vague5 === undefined) {
    vague6 = false
} else {
    vague6 = true
}
``` 

30. Create a function that produces a value based on some conditions, so the functiona accepts a string and undefined.
 If we pass a string and that string comntains a number and we can successfully convert it into a number then we should return from the function that number.
 If we pass a string that cannot be converted into a number, we should return from the function undefine.
 If we pass an undefined into the function we should also return undefined from the function.

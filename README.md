## TYPESCRIPT

= TypeScript is a statically typed, object oriented programming language that was created by Microsoft in 2012
= TypeScript is a superset of JavaScript, which means TypeScript extends the capabilities of JavaScript by adding type safety and type checking to JavaScript, data types, classes, and other object oriented features

## What is Ts
* open-source language, a superset of Js
* offers additional features to Js including static types
* using types is completely optional
* compiles down to regular Js
* can be used both for FE + BE
* includes features from ES6, ES7( classes, => )
* types from 3rd party libraries can be added with type definitions
* static checking => analize the code as we type it
* it's a development tool, your project still run Js
* is a statically typed programming language, which means we need to type annotated variables at the time of declaring them.
* there is also a compiled stage required since TypeScript cannot be loaded directly into the browser.
* this compilation stage is really, really important for TypeScript, since this is what is the most
* important feature of TypeScript and this helps us to catch errors during compilation before compiling or transforming our TypeScript code into JavaScript so it can be served to the browser


## Dynamic vs Static types
* in dynamically typed languages the types are associated with run time values and not named explicity in your code
* in statically typed languages you explicity assign types to variables, function parameters, return values, etc
* static languages: Java, C, C++, Rust, Go
* dynamic languages: Js, Python, Ruby, PHP


## Pro's & Con's
*PROS:
-more robust
-easily spot bugs
-predictibility
-redability
-popular

* CONS:
-more code to write
-more to learn
-required compilation
-not true static typing


## Compiling
* Ts uses .ts and .tsx extensions
* TSC = Ts compiler <- it's used to compile Ts files down to Js
* can watch files and report errors at compile time
* many tools include Ts compilation by default
* most IDE's have great support for Ts
* Ts config is used to configure how Ts works


## Types:
* number = is for number as 45. Js does not have a special runtime value for integers, so there's no runtime value for integers, so there's no equivalent for int or float -> everything is simply number.
* string
* boolean
* null
* undefined
* void
* object
* array
* tuples
* any = when you don't want a particular value to cause type checking value. Not recommended! => turn off type checking
* never = to handle errors. Represents values which are never observed. In a return type, this means that the function throws an exception or termionate execution og the program. Also appears when Ts determined there's nothig left in a union.
* unknown

## Situations:
* a function takes 2 numbers as parameters
* a function returns a string

## Synthax:
let variableName: type = value;

## 
When you don't specify a  type, and Ts can't infer it from context, the compiler will typically default to any. You usually want to avoid any because it's not type-checked.

## Type aliases
- a name for any type. Syntax is:
type Point = {
    x: number,
    y: number
}



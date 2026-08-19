// console.log("test");
// (function() {
//   console.log('This runs immediately!');
// })();

// (function(){
// console.log("iife function without call a fucntion this will work")
// })();

// alert("node test aler")
// console.log(null)
// console.log(typeof null)

// let symbolV = Symbol("Unique")
// console.log(symbolV)

// console.log(typeof "test");

// let NumV = "12ab"
// // console.log(NumV)
// // console.log(typeof NumV)
// let conN = Number(NumV)
// console.log(conN)
// console.log(typeof conN)

// let isLoggedIn = 101

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// let str = 33;
// // console.log(str);
// // console.log(typeof str);
// let NumS = String(str);
// console.log(NumS);
// console.log(typeof NumS);

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// let b = a++;
// console.log(a);
// console.log(b);

// let x =10;
// let a = x++;
// console.log("This will Return 10 for a for post increament : " + a);
// console.log("This will Return 11 for x for post increament:" + x);

// let x =10;
// let a = ++x;
// console.log("This will Return 11 for a for pre increament : " + a);
// console.log("This will Return 11 for x for pree increament:" + x);

// let funVar = function basiFun(){
//     console.log("This is a basic fucntion")
// }
// funVar();

// let var1 = "primitive data type like all 7 all the store in a heap momory only refence will get "
// let var2 = var1;
// var2 = "now change the value of var2 beacuse it will save in stack means a refence will give u"
// console.log(var1);
// console.log(var2);


//  Primitive (they will store in stack)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Reference (Non primitive)

// Array, Objects, Functions


// const obj1 = {}
// // console.log(obj1);
// const obje2 = new Object();
// console.log(obje2);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname)


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(user){
//     console.log(`Username is ${user.username} and price is ${user.prices}`);
// }
// handleObject(user);

// const obj1 = {
//     name : "kolkata",
//     age : 22
// }
// function callaObject(anyObject){
//   console.log(`This is name properties call with ${anyObject.name} and this is age call with properties age ${anyObject.age}`);
// }
// callaObject(obj1);

// const myNewArray = [200, 400, 100, 600]

// // function returnSecondValue(getArray){
// //     return getArray[1]
// // }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));



// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);

//      two()

// }

// one()

// console.log(x); // undefined (not an error — declaration is hoisted, value is not)
// var x = 5;
// // console.log(x); // 


// function outer() {
//   let name = 'John';

//   function inner() {
//     console.log(name); // can access `name` because inner is written inside outer
//   }

//   inner();
// }

// outer(); // "John"


// Important points are 
// hostingreq.accepts(types);


// function nornamF(){
//     let simpleV = "This is a fucntion varible"
//     console.log(this.simpleV)
// }
// nornamF();

//  globalThis.name = "This is global variable"

// const obj = {
//   name: 'John',
//   regularFunc: function() {
//     console.log(this.name); // "John" — `this` refers to obj
//   },
//   arrowFunc: () => {
//     console.log(this.name); // undefined — `this` refers to outer scope (not obj)
//   }
// };

// obj.regularFunc(); // "John"
// obj.arrowFunc();   // undefined

// const arrowF = () => {

// }

// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


//  (function iffy(){
//     console.log("This is a iffe")
// })();
//  (() => {
//     console.log("This is arroow iffe with arrow fucntions")
//  }) ()


// (function iffyFunction(){
//     console.log("This is iffe")
// })();

// ((data) => {
//     console.log('')

// })(dat);


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


// (function funName(){

// })();

// ( () => {

// } )()


// Execution Context is the environment in which JavaScript code is evaluated and executed —
// it determines what variables, functions, and this are accessible at any point in your code.

// Types of Execution Context
// 1. Global Execution Context (GEC)

// Created when your script first starts running. There's only one global context per program.


// Key Points Summary
// Concept	Detail
// Execution Context	Environment where code runs — tracks variables, scope, this
// Global Context	One per program, created first
// Function Context	New one created on every function call
// Call Stack	Tracks active execution contexts (LIFO — last in, first out)
// Creation Phase	Hoisting happens here — memory set up before execution
// Execution Phase	Code actually runs line by line, values assigned


// Summary Table
// Environment	Top-level this
// Browser (script, non-strict)	window
// Browser (strict mode)	window
// Node.js CommonJS	module.exports ({})
// Node.js ES Module	undefined
// Inside function (non-strict, called plainly)	global object (window/global)
// Inside function (strict mode)	undefined
// Arrow function at top level	Inherits from enclosing global this

// how javascript program work
// 1. Global Exection (this) 
// 2. Memory Phase
// 3. Excecution Phase


// Call Stact means LIFO 

// chai aur code impoarant viode is 25

// Key Points
// Point	Detail
// Structure	LIFO — Last In, First Out
// Purpose	Tracks which function is currently executing and what to return to
// Stack Overflow	Happens with infinite/too-deep recursion — RangeError
// Single-threaded	JS has ONE call stack — can only do one thing at a time
// Async code	Doesn't block the stack — handled via event loop, added back to stack when ready


// for(i = 1 ; i <=10 ; i++){
//     console.log(i)
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 3; j++) {
//     // console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }


// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     // console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// const ary = [1,2,3,4,5]
// const strVal = "This is a string"
// for(let value of ary){
//     // console.log(value)
// }
// for(let indexNUm of strVal){
//     console.log(indexNUm)
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// // console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }



// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


// Quick Decision Table
// Use Case	Loop to Use
// Loop through object keys/properties	for...in
// Loop through array values	for...of
// Loop through string characters	for...of
// Loop through Map/Set entries	for...of
// Loop through DOM NodeList	for...of
// Need both index AND value in array	for...of with .entries()
// Just need array values, no index	for...of
// Debug/inspect unknown object	for...in


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName + item.);
    console.log(`This is for each method for arry object values are  ${item.languageFileName} : ${item.languageName}`);
} )
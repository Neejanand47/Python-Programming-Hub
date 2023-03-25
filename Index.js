// // 1. Ways To Print JavaScript
// // Console.log("Hello World")
// // alert("me")
// // document.write("This is a Document")


// // 2. JAVASCRIPT Console API
// console.log("Hello Ankit",
//     4 + 6, "Another Log ")
// console.warn("This is Warning")
// console.error("This is an error")

// //3. JavaScript Variables
// // Variables are Container to store Data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// // 4. Data Types in JAVASCRIPT
// // numbers
// var num1 = 455;
// var num2 = 465;
// console.log(num1);
// console.log(num2);
// // string
// var str1 = "This is a String"
// var str2 = "This is a String"
// console.log(str1);
// console.log(str2);
// //Objects
// var marks = {
//     ankit: 99,
//     ravi: 45,
//     subham: 76,

// }
// console.log(marks);
// // Booleans
// var a = true;
// var b = false;
// console.log(a);
// console.log(b);

// // undefined
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// // symbol

// //At very high level, there are two types of datatypes in javascript  
// // Primitive data type : undefined, null , numbers, string , boolean, symbol
// // Reference data type : Arrays, Objects


// // Arrays = Arrays are Collection of Elements
// var arr = [1, 2, 3, 4, "string", 5, 6, 7, 8, 9]
// console.log(arr)

// //operators

// var a = 100;
// var b = 200;
// console.log("The value of a + b is", a + b);
// console.log("The value of a - b is", a - b);
// console.log("The value of a * b is", a * b);
// console.log("The value of a / b is", a / b);

// // Assignment Operators
// var c = b;
// c *= b;
// c -= b;
// c /= b;
// console.log(c);

// // comparison operators
// var x = 34;
// var y = 56;
// console.log(x == y)
// console.log(x >= y)
// console.log(x > y)
// console.log(x <= y)
// console.log(x < y)

// //Logical Operators

// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)

// // Logical Not
// console.log(!false);
// console.log(!true);

// // Operators and Operands


// //Functions in JavaScript
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in Javascript
// var age = 34;
// if (age > 18) {
//     console.log('You are eligible to drinking')
// }
//else {
// console.log('You are Not eligible to drinking')
// }

// if-else Ladder
// var age = 25
// if (age > 32) {
//     console.log("You are not a kid");
// } else
// if (age > 26) {
//     console.log("Ab lga sakte ho");
// } else if (age > 24) {
//     console.log("Yes Ab lga sakte ho");
// } else if (age > 22) {
//     console.log("hmm Ab lga sakte ho");
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr)
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// // While And Do While LOo[]
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j])
//     j++;
// }
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length)
// console.log(myArr.pop)
// myArr.shift()

// // String Methods in JAVASCRIPT
// let myLovelyString = "Ankit is a Good Boy";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("Good"))

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDay());
// console.log(myDate.setFullYear());
// console.log(myDate.toUTCString());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());

// tn = document.getElementsByTagName('button')
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created Para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createdElement('b');
// createdElement2.innerText = "This is a created Bold";
// tn[0].replaceChild(createdElement2, createElement);


// // Documents commands
// document.URL 'http://127.0.0.1:5500/PYTHON%20clone/JavaScriptTuttorial.html'
// document.links
// HTMLCollection []
// document.images
// HTMLCollection []
// document.scripts
// HTMLCollection(2) [script, script]

// //Selecting Using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// // Events in JavaScript
// function clicked() {
//     console.log('The Button was Clicked')
// }

// //setTimeout and setInterval
// function sum(a, b) {
//     return a + b;

// }
// sum = (a, b) => {
//         return a + b;
//     }
//     // console.log(sum)
// logKaro = () => {
//     console.log("I am Your Log")
// }
// setTimeout(logKaro, 2000);

// // Local Storage
// localStorage.setItem('name', 'Ankit')

// //JSON
// obj = {
//     name: "harry",
//     length: 1,
//     a: { this: "that" }
// }
// jso = JSON.stringify(obj);
// console.log(jso)
// parsed = JSON.parse({
//     name: "harry",
//     length: 1,
//     a: { this: "that" }
// })
// console.log(parsed);


//ECMA SCRIPT
// Templates-literals Backticks
a = 34;
console.log('this is my ${a}')
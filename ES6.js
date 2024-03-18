// https://dmitripavlutin.com/operations-on-arrays-javascript/
// https://dmitripavlutin.com/javascript-this-interview-questions/#question-1-variable-vs-property
// 1. var let and const
// var is function scope, it means if the variable is declard within a function
// it can be accessed within the function
// if var is used outside of the function 
// the variable can be accessed in via window object(in the browser)

// scope
// var apple = 'apple';
// function foo(){
//     var pear = 'pear';
//     console.log(apple); // apple
//     console.log(pear); // pear
// }
// foo()
// console.log(apple, 'outside') // apple
// console.log(pear, 'outside') // pear is not defined

// re-declare and update
// var fruit = 'apple';
// var fruit = 'pear';
// console.log(fruit); // pear
// fruit = 'grape'
// console.log(fruit); // grape

// hoisting
// console.log(fruit) // undefined
// var fruit = 'apple'

// equals
// var fruit;
// console.log(fruit) // undefined
// fruit = 'apple'

// problem
// var fruit = 'apple';
// if(true) {
//     // think about this in another file
//     var fruit = 'pear'
// }
// console.log(fruit) // pear

// let is block scoped, A block is a chunk of code wrapped by {}

// let fruit = 'apple';
// if (true) {
//     let fruit = 'pear'
//     // see, fruit is defined in the block, but never use in block
// }
// console.log(fruit) // apple

// re-declare and update
// let fruit = 'apple';
// // let fruit = 'pear' // Cannot redeclare block-scoped variable 'fruit'.
// fruit = 'grape' 
// console.log(fruit) // grape

// hosting 
// console.log(fruit);
// let fruit = 'apple' // ReferenceError: Cannot access 'fruit' before initialization

// const
// re-declare

// const fruit = 'apple';
// // const fruit = 'pear'; // Cannot redeclare block-scoped variable 'fruit'.
// fruit = 'grape' // TypeError: Assignment to constant variable.
// console.log(fruit)

// update

// const fruit = {name: 'apple', color: 'red'};
// // fruit = {name: 'apple', color: 'green'} // TypeError: Assignment to constant variable.

// fruit.color = 'green'
// console.log(fruit)
// const fruits = [];
// // fruits = ['apple']; // TypeError: Assignment to constant variable.
// fruits.push('apple')
// console.log(fruits); // ['apple']


// 1. what is the output of the following case ?

// var i = 5;
// for (var i =0; i<3; i++) {
//     console.log(i, 'inside') // 0, 1, 2
// }
// console.log(i, 'outside') // 3

// let i = 5;
// for (let i = 0; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // 5


function test () {
    var arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
      (function (index) {
        setTimeout(function () {
          console.log('Index: ' + index + ', element: ' + arr[index]);
        }, 1000);
      })(i);
    }
}

// 2. template string

// const name = 'yang';
// const age = 20;

// // es5 
// console.log('My name is ' + name + ", and I'm " + age + ' years old')
// // es6
// console.log(`My name is ${name}, and I'm ${age} years old`)

// 3. spread operator
// const array = [1,2];
// const newArray = [...array, 3, 4]
// console.log(newArray)

// formdata = {
//     name: 'yang',
//     age:  20,
//     gmail: 'yang@gmail.com'
// }
// let newFormData = {...formdata, gmail: 'yangnews@gmail.com'}
// console.log(newFormData)

//4.Destructuring
// const fruit = {name: 'apple', color:  'green'};
// // With the new syntax, we don't need to repeatly refer to the fruit object

// // destructure object
// const {name: fruitName, color: fruitColor} = fruit
// console.log(fruitName, fruitColor)

// const fruits = [
//     {
//         name: "apple",
//         color: "red"
//     },
//     {
//         name: "pear",
//         color: "green"
//     }
// ]
// const [apples, pears] = fruits;
// console.log(apples)

// const [{color: appleColor}, {color: pearColor}] = fruits;
// console.log(pearColor) // green


// const [bar1, [[bar2], [bar3]]] = [1, [[2], [3]]];
// console.log(bar1) // 1
// console.log(bar2) // 2
// console.log(bar3) // 3

// rest element must be last element
// const [head, ...tail] = [1,2,3,4]
// console.log(head) // 1
// console.log(tail) // [ 2, 3, 4 ]

//5function

// const foo = function(){}

// const bar = {
//     baz: function(){},
//     foo: foo
// }
// // pass it as argument to another function
// function alpha (fn) {

// }

// function beta() {
//     return function(){}
// }

// hight order function: accepts function as parameters return a function

//6. arrow function
const add  = (x, y) => x + y

//7. callback
// pass the function as parameter, and when some evnet happened, execute this function

// function logger(param) {
//     console.log(param);
// }
// function sum(x, y, callback) {
//     setTimeout(function() {
//         const total = x + y;
//         callback(total)
//     }, 1000)
// }
// sum(1, 2, logger)

// setTimeout(function() {
//     console.log('normal function')
// }, 1000)
// setTimeout(() => {
//     console.log('arrow function')
// }, 1000)

//8. closure

// function createCounter() {
//     let counter = 0;
//     const increment = () => {
//         counter++;
//     }
//     const getCount = () => {
//         return counter;
//     }
//     return {
//         increment,
//         getCount
//     }
// }
// const counter = createCounter();

// 9.this
function foo() {
    console.log(this);
}
// foo() // window
// foo.call({number: 1}) // { number: 1 }
// foo.apply({ number: 2 });  // {number: 2}

// const bar = foo.bind({number: 3})
// bar() // {number:3}

// const object = {
//     message: 'Hello, World!',
  
//     getMessage() {
//       const message = 'Hello, Earth!';
//       return this.message;
//     },
//   };
  
//   console.log(object.getMessage()); // 'Hello, World!'


// const object = {
//     who: 'World',
  
//     greet() {
//       return `Hello, ${this.who}!`;
//     },
  
//     farewell: () => {
//         // arrow function don't have own this
//       return `Goodbye, ${this.who}!`;
//     },
//   };
  
//   console.log(object.greet()); // Hello, World!
//   console.log(object.farewell()); // Goodbye, undefined!


// const object = {
//     who: 'yang',
//     cb() {
//       function foo() {
//         console.log(`Hello, ${this.who}!`);
//       }
//       foo();
//     },
//   };
  
//   object.cb(); // Hello, undefined!

// splice(x,y,newAdded)
// remove y items from index x, and add newAdded

// for loop
// const newFruits = ['apple', 'pear'];
// for (let i =0; i < newFruits.length; i++) {
//     const fruit = newFruits[i]
//     console.log(fruit) // apple pear
// }

// for of 

// const newFruits = ['apple', 'pear'];
// for (let fruit of newFruits) {
//     console.log(fruit)  // apple pear
// }

// forEach
// const fruits = ['apple', 'pear'];
// fruits.forEach((fruit) => console.log(fruit))

// map 
// const fruits = ['apple', 'pear'];
// const newFruits = fruits.map((fruit) => ({
//     name: fruit,
//     price: 10
// }))
// console.log(newFruits); // [ { name: 'apple', price: 10 }, { name: 'pear', price: 10 } ]

// reduce
// const numbers = [1,2,3]
// const sum = numbers.reduce((add, number) => add + number, 0);
// console.log(sum) // 6

// search
// const numbers = [1,2,3];
// console.log(numbers.includes(2)) // true
// console.log(numbers.indexOf(2)) // 1

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter((i) => i % 2)
// console.log(odds) // [ 1, 3, 5 ]

// const fruits = [
//     {
//       name: 'apple',
//       color: 'red',
//     },
//     {
//       name: 'pear',
//       color: 'green',
//     },
//     {
//       name: 'grape',
//       color: 'green',
//     },
//   ];

//   const filteredFruits = fruits.filter((i) => i.color === 'green');
//   console.log(filteredFruits)  //[{name: "pear", color: "green"}, {name: "grape", color: "green"}]
// const fruits = [
//     {
//       name: 'apple',
//       color: 'red',
//     },
//     {
//       name: 'pear',
//       color: 'green',
//     },
//     {
//       name: 'grape',
//       color: 'green',
//     },
//   ];

// const greenFruit = fruits.find((i) => i.color === 'green');
// console.log(greenFruit)

const set = new Set([1, 2, 2, 2, 3])
// console.log(set)
// basic class

// class Person{
//     constructor(name) {
//         this.name = name
//     }
//     toString() {
//         console.log(`name: ${this.name}`)
//     }
// }
// const yang = new Person('yang');
// console.log(yang.toString())

// Asynchronous in JS

// function newFoo() {
//     console.log('newFoo')
// }
// setTimeout(newFoo, 1000)
// console.log('hello')


// Creating an object
let person = {} // creates a empty object
let person1 = new Object() // creates an empty object
let person2 = { // creates an object with 3 properties
    name: "ABC",
    age: 30,
    profession: "Technical Trainer"
}

// console.log(person, person1, person2)

// Using dot notation to add a new property
person.name = "XYZ"
person["likes running"] = true
// console.log(person)
// console.log(person.name) // outputs - XYZ
// console.log(person["name"]) // outputs - XYZ 
// Deleting an existing property
delete person.name
// console.log(person) // outputs - { 'likes running': true }

playerName = "Amit"
age = 25
profession = "Athlete"

let player = {playerName, age, profession} // creating an object using variables.
// console.log(player) // outputs - { playerName: 'Amit', age: 25, profession: 'Athlete' }

let key1 = "player"
let key2 = "medals"

let newPlayer = {
    [key1]: "Milkha Singh",
    [key2]: 2
}
// console.log(newPlayer) // outputs - { player: 'Milkha Singh', medals: 2 }
// Object Iteration
// for (let key in player){
//     console.log(player[key]) // outputs - Amit 25 Athlete (each value on new line)
// }
// Finding a key in an object
// console.log("playerName" in player) // outputs - true
// Object Reference 
let num = 10 // variable num points to some memory address with value 10
num += 1 // variable num points to some other memory address with value 11

let number = 100 // number points to some memory address with value 100
newNumber = number //  newNumber points to a different memory address with value 100

let user = {userName: "Amit"}
newUser = user
newUser = {userName: "Gaurav"}
// Copying an  Object
let obj1 = {userName: "Amit"} // create a new object
let obj2 = {...obj1} //make a copy of obj1 using the SPREAD (...) operator
obj1.userName = "Ravi" // changes only obj1. 
// console.log(obj1, obj2) // outputs - { userName: 'Ravi' } { userName: 'Amit' }

// Nested object
let userDetails ={ 
    userName: "Amit", // Nested object. SPREAD create a new copy
    emails: ["amit@gmail.com", "amit@yahoo.com"], // Nested object. SPREAD creates a reference here
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
}
let newUserDetails = {...userDetails} // make a copy using SPREAD operator

// For nested object change reflects in both objects
newUserDetails.address.city = "Delhi"
userDetails.emails[0] = "amit@hotmail.com"
// console.log(userDetails.address.city, userDetails.emails[0]) // outputs - Delhi amit@hotmail.com
// console.log(newUserDetails.address.city, newUserDetails.emails[0]) // outputs - Delhi amit@hotmail.com

let firstObject = {}
Object.assign(firstObject, userDetails)

let secondObject = Object.assign({}, firstObject)
firstObject.address.city = "Bangalore"
secondObject.emails[0] = "amit@indya.com"

// Below statements output -  Bangalore amit@indya.com
// console.log(firstObject.address.city, firstObject.emails[0]) 
// console.log(secondObject.address.city, secondObject.emails[0]) 
// console.log(userDetails.address.city, userDetails.emails[0]) 
// console.log(newUserDetails.address.city, newUserDetails.emails[0]) 

let thirdObj = structuredClone(userDetails)
thirdObj.emails[0] = "third@gmail.com"
// below statement - outputs - third@gmail.com amit@indya.com
// console.log(thirdObj.emails[0], userDetails.emails[0])

// Object Methods
// Creating methods.
person = {
    firstName: "Amit",
    lastName: "Kumar",

    greet: function (){ // first 
        console.log("Hello!!!")
    },
    greet1() { // second
        console.log("Hey! There")
    },
    greet2: greetFunc // third
}

function greetFunc(){
    console.log("Greetings")
}

function anotherGreetFunc(){
    console.log("Jambo")
}
person.greet3 = anotherGreetFunc


// Accessing object properties
person1 = {
    firstName: "Amit",
    lastName: "Kumar",

    greet: function (){
        console.log(`Hello!! ${this.firstName} ${this.lastName}`)
    },
}
// person1.greet() // outputs - Hello!! Amit Kumar


// Method returning a value.
person1 = {
    firstName: "Amit",
    lastName: "Kumar",

    getName: function (){
        return `${this.firstName} ${this.lastName}`
    },
}
// console.log(person1.getName()) // outputs - Amit Kumar


person = {
    firstName: "Amit",
    lastName: "Kumar",
}
 
//constructor function
function Person(firstName, lastName) {
    this.fName = firstName
    this.lName = lastName
}

let pp1 = new Person("Sunil", "K") // constructor function
// console.log(pp1) // outputs - Person { fName: 'Sunil', lName: 'K' }

function Person(firstName, lastName) {
    this.fName = firstName
    this.lName = lastName
    // this.getName = function () {return `${this.fName} ${this.lName}`};
}

let pp2 = new Person("Sunil", "K") 
let pp3 = new Person("Raman", "G") 

//Below statements outputs
// console.log(pp2) // Person { fName: 'Sunil', lName: 'K', getName: [Function (anonymous)] }
// console.log(pp3) // Person { fName: 'Raman', lName: 'G', getName: [Function (anonymous)] }


// Prototype
function AddUser(userName, dept){
    this.userName = userName
    this.dept = dept
}

AddUser.prototype.getUserName = function () {
    return this.userName
}

AddUser.prototype.getDept = function () {
    return this.dept
}

let userAmit = new AddUser("Amit K", "Admin")
let userRahul = new AddUser("Rahul G", "IT")
// console.log(typeof(addUser))
someObj = AddUser.prototype
Object()
// console.log(AddUser.prototype)
console.log(userAmit.toString()) // outputs - [Object Object]
console.log(userAmit.prototype)
console.log(userAmit.__proto__)
console.log(userAmit.__proto__.__proto__)

console.log(AddUser.prototype)
console.log(AddUser.__proto__)
console.log(AddUser.__proto__.__proto__)
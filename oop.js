"use strict";

//////// Discussion of OOP ➡ OBJECT ORIENTED PROGRAMMING

//How do we really design a class
//Abstraction, Encapsulation, Inheritance, Polymorphism

//Class is like a theorical blueprint to build an actual object
//Objects are instantiated from a class, whic functions like a blueprint.
//Each objects has a prototypes

// use contructor function is used with a new operator
// constructor function is started always in a capital letter

const Person = function (firstname, birthyear) {
  console.log(this);

  this.firstname = firstname;
  this.birthyear = birthyear;
};

const jonas = new Person("jonas", 1991);

const wa = new Person("Mark", 1991);

console.log(wa);
console.log(jonas);
// 1. a new {} empty object is created
// 2. function is called, this = new empty object {}
// 3. this newly created object is linked to a prototype
// 4. automatically return in a construction function

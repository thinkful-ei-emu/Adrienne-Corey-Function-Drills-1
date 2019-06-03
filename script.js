'use strict';

function createGreeting(name, age) {
  const yearOfBirth = 2019 - age;
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ` + [yearOfBirth];
}

let output = createGreeting('Corey', 30);
console.log(output);
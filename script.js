'use strict';

function getYearOfBirth(age) {
  if(age < 0) 
    throw new Error('Age can not be negative');
  return 2019 - age;
}



function createGreeting(name, age) {
  if(age === undefined || name === undefined){
    throw new Error('Arguments not valid');
  }
  if(typeof(age) === isNaN || typeof(name) !== 'string'){  //Need guidence
    throw new TypeError('Arguments not valid types');
  }
  try { 
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ` + [yearOfBirth];
  } 
  catch(e){
    console.log(e);
  }
}

let output = createGreeting('Corey',30);
console.log(output);
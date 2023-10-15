// let,const,var

// var PI = 3.14;
// PI = 42; // stop me from doing this

// const PI =3.14;

// //arrowMethods

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// const double2 = arr => arr.map(val => val * 2);


// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

// const squareAndFindEvens2 = numbers => numbers.map(num => num ** 2).filter(square => square % 2 ===0)


// section rest,spread

// 1st Exercise ES 2015 compatible
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }


const filterOutOdds2 = (...nums) => nums.filter (num => num % 2 === 0)

// 2nd Exercise findMin

const findMin = (...nums) => Math.min(...nums)

// 3rd Exercise Merge Objects

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// 4th Exercise DoubleReturn

const doubleAndReturnArgs = (arrayNums, ...nums) => ([...arrayNums, ...nums.map(n => n * 2)])

// 5th Exercise 

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = itemsArray => {
    const rndElement = Math.floor(Math.random() * itemsArray.length)
    return [...itemsArray.slice(0,rndElement), ...itemsArray.slice(rndElement + 1)]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val 
    return newObj
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key] 
    return newObj
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val 
    return newObj
}


// ES2015 Object Enhancement
// Exercise 1
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// ES2015 Version of createInstructor   
const createInstructor2 = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
}

//Exercise 2
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

// ES2015 Version of Exercise 2 
const instructor2 = (favoriteNumber) => {
    return {
        firstName: "Colt",
        [favoriteNumber]: "That is my favorite!"
    }
}


// Exercise 3 
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

// ES2015 Version of Exercise 3

const instructor3 = () => {
    return {
        firstName: "Colt",
        sayHi () {
            return "Hi!";
        },
        sayBye () {
            return this.firstName + " says bye!";
        },
    }
}

// Exercise 4
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

const createAnimal2 = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise
        }
    }
}

// Destructuring
// Exercise 1
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  const { a,b } = obj.numbers 

// Exercise 2

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]]

//Race Results

const raceResults = ([first, second, third, ...rest]) => { 
    first,
    second,
    third,
    rest
 }
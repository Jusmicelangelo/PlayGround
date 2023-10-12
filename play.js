// let,const,var

var PI = 3.14;
PI = 42; // stop me from doing this

const PI =3.14;

//arrowMethods

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

const double2 = arr => arr.map(val => val * 2);


function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

const squareAndFindEvens2 = numbers => numbers.map(num => num ** 2).filter(square => square % 2 ===0)
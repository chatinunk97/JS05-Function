/*
2 Ways to write functions

1. Function declation -> Named function
2. Function expression -> most of the time it's in Anonymous Function pattern

*/
/*
##################################### Function declation ########################################
//---- In order to use a function ---//
    1. Define the function -> name it , input(Parameter)
    2. call it to use it
*/

// 1. Define 
function sayHi(fname,lname){
  console.log(`Hello ${fname} ${lname} !`)
}

//2. Call ---> always need a () to execute
sayHi() 


// RETURN VALUE ---> return is a force quit out of that function
function add(x,y){
  let result = x+y;
  return result;
}
console.log(add(5,6)); //-> one time use is called "On the fly"
let r = add(5,6) // stores value in a variable to use it again afterwards
console.log(r); 


//Multiple RETURNs
function isEven(n){
  // if(n%2 === 0 ){
  //   return true;
  // }
  // return false;
  return ( n % 2 === 0);
  // This already evaluate the result we want which is
  // true or false so we don't even need an if 

}
console.log(isEven(2))

/*
  -Declare
  -Params
  -Call
  -Return
*/

/*
############################ Function expression  #########################

FORMAT -> variable = expression;

What is an Expression ? -> Eveything that can evaluate to a single value
Single value
combine expression  -> 7+2 -> 9
Function result : add(7,2) -> 7+2 -> 9

*/

let z = console.log; 
// Now z is === console.log it's a function yes
// but like always if you want to use a function you need () 
z("WOW")


// Anonymous Function

// Since we can assign a named-function to a variable
// why not just assign the function to a variable directly

const sayHello = function(name){console.log("Hi " + name)};
// The 1 difference from the normal function is it will protect Hoisting
// you have to call if after it is declared, unlike normal function that have Hoisting

sayHello("Boss");

/*
// Arror function//
Before going in to arrow let's compare the previous
1. function add () {}  ### You need name, keyword: function
2. let add = function (){} ## You don't need name but need function
3. let add = () => {} ## you don't need name nor function
*/
const minus = (a,b) => {return a-b;}
console.log(minus(100,-100));
//OR EVEN SHORTER IF there's only 1 return
// You don't need the {} and the keyword return
const plusValue = (a,b) => a+b
console.log(plusValue(10,0.88))
const plusValue2 = (a,b) => a+b;
console.log(plusValue2(50,0.99))
const addOne = a => a+1;
console.log(addOne(0.595))
let isleapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isleapYear(4000));

/*
// Alternative
*/

// if(year % 100 === 0) {
//     return year % 400 ===0;
// // / ---> you can do 2 checking
// }
// return year % 4 === 0;


// Another alternative
// return year % 100 == ? year % 400 == 0 : year % 400 ==0;
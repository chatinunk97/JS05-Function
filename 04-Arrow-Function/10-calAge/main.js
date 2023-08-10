let isleapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
let calAge = year => {
    result = 0;
    for( year ; year <= 2020 ; year++){
        if(isleapYear(year)){
            result += 366;
        }
        else{
            result += 365;
        }
    }
    return result;
};
console.log(calAge(1997));
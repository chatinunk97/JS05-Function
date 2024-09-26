let isleapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
let calAge = year => {
    leapyear=0;
    nonleap=0;
    result = 0;
    for( year ; year <= 2020 ; year++){
        console.log(year)
        if(isleapYear(year)){
            leapyear ++
            result += 366;
        }
        else{
            result += 365;
            nonleap ++
        }
    }
    console.log(leapyear)
    console.log(nonleap)
    return result;
};
console.log(calAge(2000));
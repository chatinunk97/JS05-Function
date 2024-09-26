function checkAge(age){
    if (age > 18) {
        return true;
    }
    return false;
}
console.log(checkAge(17));
console.log(checkAge(20));

function checkAge2(age){
    return (( age > 18) ? true : false);
}
console.log(checkAge2(17));
console.log(checkAge2(20));


function checkAge3(age){
    return (age > 18 || age < 18);
}

console.log(checkAge2(17));
console.log(checkAge2(20));
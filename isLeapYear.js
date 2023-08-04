// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyLeapYear = isLeapYear(1933);
console.log(isMyLeapYear);
const isHerYearLeapYear = isLeapYear(1060);
console.log(isHerYearLeapYear);
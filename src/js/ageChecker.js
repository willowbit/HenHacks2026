let myBirth = ['1','2','2','5','5','7','8','0','3','1','4','2','0','0','7']

import fs from 'fs'

//read DLN + DOB number from data/tmp.txt
var dldob = fs.readFileSync('data/tmp.txt', { encoding: 'utf8', flag: 'r' });

const currentYear = Date.now() / 31540000000 + 1970


//intakes DlDob list taking advantage of set formatting for age; uses unix current time
//inputs: list[str]
//outputs: num

function calculateAge(date){
    
    let month = "";
    let day = "";
    let year = "";
    let mob = date.slice(7,9);
   let dob = date.slice(9,11);
   let yob = date.slice(11);
    for (let i = 0; i < mob.length; i++){
        month += mob[i]
    }
    for (let i = 0; i < dob.length; i++){
        day += dob[i]
    }
    for (let i = 0; i < yob.length; i++){
        year += yob[i]
}
    let dateOfBirth = (Number(month)/12) + (Number(day)/365) + Number(year);
return currentYear - dateOfBirth
}

function checkAge(age){
    let oldEnough = false
    if (age >= 18){
        oldEnough = true
    }
    return oldEnough
}

console.log(calculateAge(dldob));

console.log(checkAge(calculateAge(dldob)));
console.log(currentYear);
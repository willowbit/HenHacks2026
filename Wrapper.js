

// concatenate the license and date of birth strings as one string
let ddAndDob = licenseNumber + dateOfBirth;

// convert the license+number into a list made up of individual digits
let dlDobVar = []

for (let number = 0; number < ddAndDob.length; number ++) {
  dlDobVar.push(ddAndDob[number])
}

export const dldob = dlDobVar;

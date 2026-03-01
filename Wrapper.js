import { createWorker } from 'tesseract.js'; // import tesseract library!

// create tesseract worker
const worker = await createWorker('eng');
// create rectangles for DL information
const rectangles = [
  {
    left: 320,
    top: 254,
    width: 320,
    height: 240,
  },
  // {
  //   left: 0,
  //   top: 2030,
  //   width: 2230,
  //   height: 645,
  // }
  
];

// loads image and runs text recognition
async function getText() {
    const values = [];
  for (let i = 0; i < rectangles.length; i++) {
    const { data: { text } } = await worker.recognize('wilson.jpg', { rectangle: rectangles[i] });
    values.push(text);
  }
  // returns string of values
  console.log(values)
  return values;
  await worker.terminate();
}

// gets license information
let license = (await getText())[0].split("\n");

// format the license number as one string
let licenseNumber = license[0];
licenseNumber = licenseNumber.replace("4d pLN:", "");
licenseNumber = licenseNumber.replaceAll(" ", "");

// format the date of birth as one string
let dateOfBirth = license[1];
dateOfBirth = dateOfBirth.replace("Q poe:", "");
dateOfBirth = dateOfBirth.replaceAll("/", "");

// concatenate the license and date of birth strings as one string
let ddAndDob = licenseNumber + dateOfBirth;

// convert the license+number into a list made up of individual digits
let dlDobVar = []

for (let number = 0; number < ddAndDob.length; number ++) {
  dlDobVar.push(ddAndDob[number])
}

export const dldob = dlDobVar;
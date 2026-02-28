import { createWorker } from 'tesseract.js';

const worker = await createWorker('eng');
const rectangles = [
  {
    left: 320,
    top: 254,
    width: 320,
    height: 240,
  },
];


async function getText() {
    const values = [];
  for (let i = 0; i < rectangles.length; i++) {
    const { data: { text } } = await worker.recognize('dl.png', { rectangle: rectangles[i] });
    values.push(text);
  }
  // return values;
  return values;
  // console.log(values);
  await worker.terminate();
}

let license = (await getText())[0].split("\n");

let licenseNumber = license[0];
licenseNumber = licenseNumber.replace("4d pLN:", "");
licenseNumber = licenseNumber.replaceAll(" ", "");

let dateOfBirth = license[1];
dateOfBirth = dateOfBirth.replace("Q poe:", "");
dateOfBirth = dateOfBirth.replaceAll("/", "");

ddAndDob = licenseNumber + dateOfBirth;

dlDobVar = []

for (let number = 0; number < ddAndDob.length; number ++) {
  ddDobVar.push(ddAndDob(number))
}

export const dldob = dlDobVar;

// getText();
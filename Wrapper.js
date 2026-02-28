import { createWorker } from 'tesseract.js';

const worker = await createWorker('eng');
const rectangles = [
  {
    left: 320,
    top: 254,
    width: 320,
    height: 240,
  },
  {
    left: 0,
    top: 630,
    width: 640,
    height: 130,
  },
];


async function gimmevals() {
    const values = [];
  for (let i = 0; i < rectangles.length; i++) {
    const { data: { text } } = await worker.recognize('dl.png', { rectangle: rectangles[i] });
    values.push(text);
  }
  // return values;
  console.log(values)
  await worker.terminate();
}

gimmevals()

// function x() {
//   let y = gimmevals();
//   console.log(y);
// }

// x()
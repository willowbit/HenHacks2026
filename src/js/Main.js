import {charToAscii, splitLicenseDob, finalHashing, CombineList} from "./hashAlgorithm.js";
import fs from 'fs'

// read DLN + DOB number from data/tmp.txt
var dldob = fs.readFileSync('data/tmp.txt', { encoding: 'utf8', flag: 'r' });

// do hashAlgorithm.js
console.log("original: " + dldob)
console.log("charToAscii:" + charToAscii(dldob))
console.log("HashName:" + splitLicenseDob((charToAscii(dldob))))
console.log("CombineList:" + finalHashing(splitLicenseDob(charToAscii(dldob))))
console.log("CombineList:" + CombineList(finalHashing(splitLicenseDob(charToAscii(dldob)))))

// check resulting hash against government API

var finalHash = "guh"

async function getData() {
  const url = "http://localhost:3000/people:" + finalHash;
  try {
    const response = await fetch(url);
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.error(error.message);
  }
}

getData()
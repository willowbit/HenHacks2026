import {charToAscii, splitLicenseDob, finalHashing, CombineList} from "./hashAlgorithm.js";
import fs from 'fs'
import {checkAge} from "./ageChecker.js"
import { spawn } from 'child_process'

// check age

if (checkAge) {
  console.log("proceed")
} else {
  console.log("you are too young!")
}


// read DLN + DOB number from data/tmp.txt
var dldob = fs.readFileSync('data/tmp.txt', { encoding: 'utf8', flag: 'r' });


// do hashAlgorithm.js
// console.log("original: " + dldob)
// console.log("charToAscii:" + charToAscii(dldob))
// console.log("HashName:" + splitLicenseDob((charToAscii(dldob))))
// console.log("CombineList:" + finalHashing(splitLicenseDob(charToAscii(dldob))))
var finalHash = CombineList(finalHashing(splitLicenseDob(charToAscii(dldob))))
console.log(finalHash)

// check resulting hash against government API

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
import {charToAscii, splitLicenseDob, finalHashing, CombineList} from "./hashAlgorithm.js";
import * as fs from 'fs';

const dldob = fs.readFileSync('../data/tmp.txt')
console.log(dldob)

console.log("charToAscii:" + charToAscii(dldob))
console.log("HashName:" + splitLicenseDob((charToAscii(dldob))))
console.log("CombineList:" + finalHashing(splitLicenseDob(charToAscii(dldob))))
console.log("CombineList:" + CombineList(finalHashing(splitLicenseDob(charToAscii(dldob)))))
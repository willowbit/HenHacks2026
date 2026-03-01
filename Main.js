import {charToAscii, splitLicenseDob, finalHashing, CombineList} from "./HashLiscense.js";
import{dldob} from "./Wrapper.js";


console.log("charToAscii:" + charToAscii(dldob))
console.log("HashName:" + splitLicenseDob((charToAscii(dldob))))
console.log("CombineList:" + finalHashing(splitLicenseDob(charToAscii(dldob))))
console.log("CombineList:" + CombineList(finalHashing(splitLicenseDob(charToAscii(dldob)))))
import {charToAscii, HashName} from "./HashLiscense.js";
import{CombineList, fillLicense} from "./CombineList.js";
import{dldob} from "./Wrapper.js";


console.log("charToAscii:" + charToAscii(dldob))
console.log("HashName:" + HashName(charToAscii(dldob)))
console.log("CombineList:" + CombineList(HashName(charToAscii(dldob))))
console.log("fillLicense:" + fillLicense(CombineList(HashName(charToAscii(dldob)))))


console.log("THIS IS DLNUM: " + dlNumber)
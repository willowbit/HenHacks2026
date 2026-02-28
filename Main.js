import {charToAscii, HashName,CombineList, fillLicense} from "./HashLiscense.js";
import{dldob} from "./Wrapper.js";


console.log("charToAscii:" + charToAscii(dldob))
console.log("HashName:" + HashName(charToAscii(dldob)))
console.log("CombineList:" + CombineList(HashName(charToAscii(dldob))))
console.log("fillLicense:" + fillLicense(CombineList(HashName(charToAscii(dldob)))))
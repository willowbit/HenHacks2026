import {charToAscii, HashName} from "./HashLiscense.js";
import{CombineList, fillLicense} from "./CombineList.js";
import{dlNumber, dobNumber} from "./Wrapper.js";

console.log("charToAscii:" + charToAscii(["0","2","3","4","5","6","7","8"]))
console.log("HashName:" + HashName(charToAscii(["0","2","3","4","5","6","7","8"])))
console.log("CombineList:" + CombineList(HashName(charToAscii(["0","2","3","4","5","6","7","8"]))))
console.log("fillLicense:" + fillLicense(CombineList(HashName(charToAscii(["0","2","3","4","5","6","7","8"])))))


console.log("THIS IS DLNUM: " + dlNumber)
///Mel is Mel

function HashName(asciiName) {
    for (let i=0; i<asciiName.length; i++){
    asciiName[i] = (asciiName[i] + 40)/128
    }
    return asciiName
}

console.log(HashName([1,1,1,1,1]))
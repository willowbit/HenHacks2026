///Mel is Mel

function HashName(asciiName) {
    for (let i=0; i<asciiName.length; i++){
        if (asciiName[i]+40 >= 128) {
            asciiName[i] = (asciiName[i]+40)/128
        }else{
            asciiName[i] = asciiName[i] + 40
        }
    
    }
    return asciiName
};

console.log(HashName([1,2,3,4,5,6,7,8,9]))
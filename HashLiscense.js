// Converts list of chars to a list of Ascii values; feeds into HashName
// Inputs: List
// Outputs: List
export function charToAscii(name) {
    let asciiName = [];
    for (let character = 0; character < name.length; character ++) 
        {let asciiValue = name[character].charCodeAt();
        asciiName.push(asciiValue);
        };
    console.log(asciiName)
    return(asciiName);
} 

// Hashes list of ascii values; feeds into CombineLicense
// Inputs: List
// Outputs: List
export function HashName(asciiName) {
    for (let i=0; i<asciiName.length; i++){
        asciiName[i] = ((asciiName[i] + 40)%126 +32)
   
    }
    return asciiName
};

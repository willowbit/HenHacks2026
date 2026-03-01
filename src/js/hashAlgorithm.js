let myBirth = ['1','2','2','5','5','7','8','9','0','3','1','4','2','0','0','7']

// Converts list of chars to a list of Ascii values; feeds into HashName
// Inputs: List[str]
// Outputs: List[str]
export function charToAscii(name) {
    let asciiName = [];
    for (let character = 0; character < name.length; character ++) 
        {let asciiValue = name[character].charCodeAt();
        asciiName.push(asciiValue);
        };
    console.log(asciiName);
    return(asciiName);
};

//Splits list into four lists: Feeds into finalHashing
//Input: list[str]
//Output:list[list[str]]
export function splitLicenseDob(plainText){
    let midPoint = plainText.length/2;
    let leftPlainText = plainText.slice(0,midPoint);
    let rightPlainText = plainText.slice(midPoint);
    let secondMidPoint = leftPlainText.length/2;
    let firstQuart = leftPlainText.slice(0,secondMidPoint);
    let secondQuart = leftPlainText.slice(secondMidPoint);
    let thirdQuart = rightPlainText.slice(0,secondMidPoint);
    let fourthQuart = rightPlainText.slice(secondMidPoint);
    return [firstQuart,secondQuart,thirdQuart,fourthQuart];
}

//Hashes each list from splitLicenseDob and recombines them
//Input: list[list[str]]
//Output: list
export function finalHashing(quarts){
    for (let i=0; i<quarts[0].length; i++){
        quarts[0][i] = ((quarts[0][i] + 20)%126 +32)
    }
    for (let i=0; i<quarts[1].length; i++){
        quarts[1][i] = ((quarts[1][i] + 30)%126 +32)
    }
    for (let i=0; i<quarts[2].length; i++){
        quarts[2][i] = ((quarts[2][i] + 40)%126 +32)
    }
    for (let i=0; i<quarts[3].length; i++){
        quarts[3][i] = ((quarts[3][i] + 50)%126 +32)
    }
    console.log("Test: "+quarts)
    let fourQuarts = [];
    for (let i=0; i<quarts.length; i++){
        for (let j=0; j<quarts[i].length; j++)
            fourQuarts.push(quarts[i][j])
    }
    return fourQuarts;
}



// Takes a list of the hashed drivers license numbers 
// and returns the same numbers but in a string of numbers

export function CombineList(hashedDL) {
    let hashedDLstring = "";
    for (let i = 0; i <hashedDL.length; i++){
        hashedDLstring = hashedDLstring + hashedDL[i].toString();
    }
    return hashedDLstring;
};


//  If the number post-hash does not have the max number of digits,
// it will fill in 0 until it is at max digits

// This is currently not doing anything, however, if changed to 
// also take name, it would

export function fillLicense(license){
    let filler = 24 - license.length;
    if (license.length < 48){
        while(license.length < 48){
            license = license + "0"
        }
    }
    return license;
};

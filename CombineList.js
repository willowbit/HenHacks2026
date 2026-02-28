
// Takes a list of the hashed drivers license numbers 
// and returns the same numbers but in a string of numbers

export function CombineList(hashedDL) {
    let hashedDLstring = "";
    for (let i = 0; i <hashedDL.length; i++){
        hashedDLstring = hashedDLstring + hashedDL[i].toString();
    }
    return hashedDLstring;
}


//  If the number post-hash does not have the max number of digits,
// it will fill in 0 until it is at max digits

// This is currently not doing anything, however, if changed to 
// also take name, it would

export function fillLicense(license){
    let filler = 24 - license.length;
    if (license.length < 24){
        while(license.length < 24){
            license = license + "0"
        }
    }
    return license;
}

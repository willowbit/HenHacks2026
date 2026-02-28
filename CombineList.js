

export function CombineList(hashedDL) {
    let hashedDLstring = "";
    for (let i = 0; i <hashedDL.length; i++){
        hashedDLstring = hashedDLstring + hashedDL[i].toString();
    }
    return hashedDLstring;
}

console.log(CombineList([23,24,25,25,156,465]));

export function fillLicense(license){
    let filler = 24 - license.length;
    if (license.length < 24){
        while(license.length < 24){
            license = license + "0"
        }
    }
    return license;
}

console.log(fillLicense(CombineList([23,24,25,25,165,500])));
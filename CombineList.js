

function CombineList(hashedDL) {
    let hashedDLstring = "";
    for (let i = 0; i <hashedDL.length; i++){
        hashedDLstring = hashedDLstring + hashedDL[i].toString();
    }
    return hashedDLstring;
}

console.log(CombineList([23,24,25,25,156,465]));

function fillLicense(license){
    let filler = 21 - license.length;
    if (license.length < 21){
        while(license.length < 21){
            license = license + "0"
        }
    }
    return license;
}

console.log(fillLicense(CombineList([23,24,25,25,1,5])));
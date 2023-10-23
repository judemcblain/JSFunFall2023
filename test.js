const driverLicense = true;
const passport = true;

if (driverLicense && passport) {
    console.log("You can fill out your paper work.");
}







const redCar = true;
const fourTires = true;

if (redCar && fourTires) {
    console.log("You can drive fast.");
}






const hasPermit = true;
const isAccompaniedByAdult = false;

if (hasPermit && isAccompaniedByAdult) {
    console.log("You can drive");
} else {
    console.log("You need an adult");
}







const track = false;
const field = true;

if (track || field){
    console.log("You are a participant.");
}


const paint = false;
const canvas = true;

if (paint || canvas) {
    console.log("You are an artist.");
}





const hasChicken = true;
const hasBeef = false;
const hasPork = false;
const hasFish = false;

if (hasChicken || hasBeef || hasPork || hasFish) {
    console.log("This meal is not vegetarian");
}


const hasLicense = false;
const hasPermit = false;
const isAccompaniedByAdult = true;

if ((hasPermit && isAccompaniedByAdult) || hasLicense) {
    console.log("You can drive.");
}





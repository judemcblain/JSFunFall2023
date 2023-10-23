let isNotAtGoalWeight;

let targetBMI = 24; // e.g.
let actualBMI = 27; // e.g.

/**
 * You will be changing the value of "isNotAtGoalWeight" below.
 * If "targetBMI" equals "actualBMI", then "isNotAtGoalWeight" should be false.
 * If "targetBMI" does not equal "actualBMI", "isNotAtGoalWeight" should be true.
 * Your answer should still work when "targetBMI" and "actualBMI" are different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

if (targetBMI === actualBMI) {
    isNotAtGoalWeight = false;
} else if (targetBMI !== actualBMI) {
    isNotAtGoalWeight = true;
}


const checkIn = (pilots, attendants) => {
    console.log(`Checked in ${pilots} and ${attendants}`);
};

checkIn("Captain", "First Mate");
checkIn("Steward", "Stewardess");


const sign = (city, state) => {
    return `Welcome to ${city}, ${state}`;

};

console.log(sign);





const greet = () => {
    console.log("Hello World");
};

const greeting = greet();
console.log(greeting);
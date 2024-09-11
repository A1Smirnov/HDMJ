// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

console.log(`Check one - Sum equal 50: ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log(`Check two - At least two odd numbers: ${isTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

console.log(`Check three - No number larger than 25: ${!isOver25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

console.log(`Check four - All numbers are unique: ${isUnique}`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

console.log(`Validation overall result: ${isValid}`);



// Implementing Additional checks

// Check if all numbers are divisible by 5
const areAllDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`All numbers are div by 5: ${areAllDivisibleBy5}`);

// Check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;
console.log(`First number is larger than the last: ${isFirstLargerThanLast}`);

// Arithmetic chain
// o	Subtract the first number from the second number.
// o	Multiply the result by the third number.
// o	Find the remainder of dividing the result by the fourth number.

const arithmeticResult = ((n2 - n1) * n3) % n4;
console.log(`Arithmetic chain result: ${arithmeticResult}`);

// •	Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const isNotOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`Check three - No number larger than 25: ${isNotOver25}`);


// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  // PART 2: Practical Math

  // Overall info in const - total distance miles, fuel budget in $, gallon price in $

const tripDistance = 1500;
const fuelBudget = 175;
const gallonPrice = 3;

// Miles per gallon at different miles per hour speed

const mpgAt55 = 30;
const mpgAt60 = 28;
const mpgAt75 = 23;

// Declare new variable that defines speed in miles per hour, because we are not able to use "function"

const speedAt55 = 55;
const speedAt60 = 60;
const speedAt75 = 70;

// Speed 55 mph
const gallonsAt55 = tripDistance / mpgAt55;
const budgetAt55 = gallonsAt55 * gallonPrice;
const timeAt55 = tripDistance / speedAt55;
const budgetEnoughAt55 = budgetAt55 <= fuelBudget;

// Speed 60 mph
const gallonsAt60 = tripDistance / mpgAt60;
const budgetAt60 = gallonsAt60 * gallonPrice;
const timeAt60 = tripDistance / speedAt60;
const budgetEnoughAt60 = budgetAt60 <= fuelBudget;

// Speed 75 mph
const gallonsAt75 = tripDistance / mpgAt75;
const budgetAt75 = gallonsAt75 * gallonPrice;
const timeAt75 = tripDistance / speedAt75;
const budgetEnoughAt75 = budgetAt75 <= fuelBudget;

// Print log for 55 mph
console.log(` `);

console.log(`At 55 mph:`);
console.log(`1. Consumption: ${gallonsAt55} gallons of fuel.`);
console.log(`2. Total fuel budget: ${budgetAt55} dollars`);
console.log(`3. Time: ${timeAt55} hours.`);
console.log(`4. Is it okay: ${budgetEnoughAt55 ? "Yes" : "No"}`);

// Print log for 60 mph
console.log(` `);

console.log(`At 60 mph:`);
console.log(`1. Consumption: ${gallonsAt60} gallons of fuel.`);
console.log(`2. Total fuel budget: ${budgetAt60} dollars`);
console.log(`3. Time: ${timeAt60} hours.`);
console.log(`4. Is it okay: ${budgetEnoughAt60 ? "Yes" : "No"}`);

// Print log for 55 mph
console.log(` `);

console.log(`At 75 mph:`);
console.log(`1. Consumption: ${gallonsAt75} gallons of fuel.`);
console.log(`2. Total fuel budget: ${budgetAt75} dollars`);
console.log(`3. Time: ${timeAt75} hours.`);
console.log(`4. Is it okay: ${budgetEnoughAt75 ? "Yes" : "No"}`);

const numbers = [2, 6, 10, 48, 12, 30];

function getDoubles(numbers){
const output = [];

// For Of loop
for(const number of numbers){
    const doubled = doubleIt(number);
    output.push(doubled);
}
return output;
}


// Arrow Function
const doubleIt = num => num * 2;

const result = getDoubles(numbers);
console.log(result);


// Map Array
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

// Direct map array use with arrow function
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);


// Sort map array with arrow 
const fiveTimes = [4, 5, 12, 20, 9, 50].map(x => x * 2);
console.log(fiveTimes);
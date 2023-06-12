const numbers = [1, 2, 3, 4, 5];

// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameter
const total = numbers.reduce((previous,current) => previous + current , 0);
console.log(total);

// .reduce multiline code
const totalValue = numbers.reduce((previous,current) => {
    console.log(previous,current);
    return  previous + current;
} , 0);
console.log(totalValue);
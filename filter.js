
// filter = New array.
const numbers = [12, 25, 32, 20, 14, 18, 50, 5, 39];
const adult = numbers.filter(number => number >= 18);
const tiny = numbers.filter(number => number < 18);

// console.log(adult);
// console.log(tiny);

// Even & Odd filtering
const even = numbers.filter(number => number % 2 === 0);
const odd = numbers.filter(number => number % 2 !== 0);
// console.log(even);
// console.log(odd);

const products = [
    {id:1, name: 'Watch', price: 30000},
    {id:1, name: 'Mobile', price: 130000},
    {id:1, name: 'Tablet', price: 90000},
    {id:1, name: 'Laptop', price: 110000},
    {id:1, name: 'Car', price: 14230000}
]

const expensive = products.filter(product => product.price > 100000);
console.log(expensive);


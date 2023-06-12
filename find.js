
// find = giv output 1st element in array not give full array
const numbers = [12, 25, 32, 20, 14, 18, 50, 5, 39];
const fives = numbers.find(num => num % 5 ===0);
const fivesAll = numbers.filter(num => num % 5 ===0);
console.log(fives);

const products = [
    {id:1, name: 'Car', price: 14230000},
    {id:1, name: 'Mobile', price: 130000},
    {id:1, name: 'Tablet', price: 90000},
    {id:1, name: 'Laptop', price: 110000},
    {id:1, name: 'Watch', price: 30000}
]

const cheap = products.find(product => product.price < 100000);
console.log(cheap);
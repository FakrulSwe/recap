const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);

const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

// forEach Array
friends.forEach(friend => console.log(friend));
const products = [
    {id:1, name: 'Watch', price: 30000},
    {id:1, name: 'Mobile', price: 130000},
    {id:1, name: 'Tablet', price: 90000},
    {id:1, name: 'Laptop', price: 110000},
    {id:1, name: 'Car', price: 14230000}
]

// ForEach function
products.forEach(product => console.log(product));

// map function
const allName = products.map(product => product.price);
const firstLetter2 = products.map(product => product.name[0]);
console.log(allName);
console.log(firstLetter2);


// Array
const numbers = [5,6,7,1,6];
let num = 12;
num = 5;

// default parameter
function calculateSalary(salary,tax = 0.25 ,bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// template String
const elementHTML = `
<h3> Name: </h3>
<p> Address: </p>
<p> Salary: ${calculateSalary(10000, 0, 0)}</p>
<p> others: ${numbers[2]}</p>
`

// Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// Spread : array add new array
const ages = [45, 12, 10, 65, 47, 20];
const newAges = [...ages, 45, 12, 20, 74]; 

// Destructuring: Declare variable in array
const {x, y, z, ...c} = {x: 45, y:12, z: 33, name: "Fakrul Islam", salary:450000}
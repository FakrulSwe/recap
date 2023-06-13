// 1. Optional Chaining
// student.marks?.math

// must know
// 2.map, filter, find

// 3.(Optional): forEach, reduce(advanced)

// 4.class, constructor, super, inheritance, parent class, child class

// 5.`(must) Prototypical Inheritance

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const obj = { foo: 1 };
obj.bar = 2;

function min(nums){ 
    return Math.min(nums) 
  }
  console.log(min( [1,3,2 ]))

  const cube=x=> x*x*x; 
console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);
const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks:{
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

const marks = student.marks.chemistry;
// console.log(marks);

// Notation 
const math = student['marks']['math'];
console.log(math);
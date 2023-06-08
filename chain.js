const users = [{id:1, name:"Rupok", job:"Software Engineer"}];
console.log(users[0].job);


const data = {
    count: 500,
    data: [
        {id:1, name:"Lubna", job:"leader"},
        {id:2, name:"Amira", job:"Job holder"}
    ]
}

console.log(data.data[0].name);


const user = {
    id: 5001,
    name: "Thomas alba edison",
    address: {
        street : {
            first: "35/A, Kochukhet lane",
            second: "Third floor",
            side: "Right"
        },
        postOffice: "Cantonment",
        city: "Dhaka"
    }
}

// object chain
const userFloor = user.address?.street?.second;
console.log(userFloor);
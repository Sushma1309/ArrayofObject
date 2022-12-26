let studentRecords = [ 
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
] 

// Question -- 1

studentRecords.map( (n)=>
    console.log(n.name.toUpperCase())
)

// Question -- 2

let newRecord = [];
for(let i = 0; i < studentRecords.length; i++){
    if(studentRecords[i].marks > 50){
        newRecord.push(studentRecords[i]);
    }
}
console.log(newRecord);

// Question -- 3

let student = studentRecords.filter((n) => n.marks > 50 && n.id > 120);
console.log(student);

//  Question -- 4
let addMarks = studentRecords.reduce((arr,cuu) => arr + cuu.marks,0);

console.log(addMarks);

// Question -- 5

let array = [];

for (let i = 0; i < studentRecords.length; i++){
    if(studentRecords[i].marks > 50){
        array.push(studentRecords[i].name);
    } 
}

console.log(array);

// Question -- 6
let sumId = studentRecords.filter((n)=> n.id > 120).reduce((arr,cuu) => arr + cuu.marks,0)
console.log(sumId)

// Question -- 7

let total = studentRecords.map((value)=>{
    if(value.marks<50){
        value.marks +=15;
    }
    return value;
}).filter((value)=>value.marks>50).reduce((acc,cur)=>acc+cur.marks ,0)

console.log(total)

// Question -- 8

let obj1 = { name: "Rushikesh", class: "Master's", rollno: 1 };
let obj2 = { name: "Satish", class: "Btech", rollno: 2 };
let obj3 = { name: "Abhishek", class: "Degree", rollno: 3 };
let obj4 = { name: "Chetan", class: "Inter", rollno: 4 };
let obj5 = { name: "Saksham", class: "Degree", rollno: 5 };
let obj6 = { name: "Anant", class: "Master's", rollno: 6 };


let result = [obj1,obj2,obj3,obj4,obj5,obj6]

console.log(result)
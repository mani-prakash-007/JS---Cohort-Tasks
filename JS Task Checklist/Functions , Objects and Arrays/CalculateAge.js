// Calculate Array

let people = [{
    name : "Mani",
    Age : 20
},{
    name : "Green",
    Age : 21
},{
    name : "Amar",
    Age : 22
},{
    name : "Maria",
    Age : 23
},{
    name : "Khan",
    Age : 23
},{
    name : "Eb",
    Age : 31
}
]

function calculateAverageAge(array){
    let AgeSum = 0;
    for(let i = 0 ; i < array.length ; i++){
        AgeSum += array[i].Age;
    }
    return AgeSum/array.length;
}

console.log("Average Age : " + calculateAverageAge(people));
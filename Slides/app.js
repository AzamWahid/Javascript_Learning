
// <---------------------TASK SLIDE 11 =-==================>
// let street, country;

// street = 'Kharadar';
// country = "Pakistan";

// let fullMalingAddress = `${street} ${country}`;

// console.log(fullMalingAddress);




// ----------------------TASK SLIDE 15 -------------------->>

// const score1 = 10;
// const score2 = 25;
// const score3 = 35;

// const total_score = score1+score2+score3;
// const avg_score = (score1+score2+score3) / 3;

// console.log(`Total Score is ${total_score}`);
// console.log(`Avergae Score is ${avg_score}`);



// const plates = 20;
// const people = 7;

// let remaining_plates = plates % people;
// console.log(remaining_plates);

// ++remaining_plates;

// let message = `There are ${remaining_plates} plates available`;
// console.log(message);


// var fruits = ['mango','apple','graps',33];
// var firstFruit = fruits[0];
// fruits[3]='orange';
// console.log(fruits);
// console.log(firstFruit);
// console.log(`${firstFruit} ${fruits}`);



// --------chapter 1 

// //1
// alert('Error ! Please enter a valid password');

// //2

// var pizza = 'Pizza\npizz\npiz\npi\np';
// alert(pizza)


// const arr = ["mango","apple","orange"];
// let arrLength =  arr.length;
// let arryItem =  arr[1];


// console.log(arrLength);
// console.log(arryItem);


// console.log(arr);
// arr.push("stawberry");
// console.log(arr);
// arr.unshift("peach");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.pop();
// console.log(arr);


// arr.splice(1,1)
// console.log(arr);

// arr.splice(1,0,'banana')
// console.log(arr);

// let sliceArray = arr.slice(1,2)
// console.log(arr);
// console.log(sliceArray);


//slide 27

// const car = {

//     make: "Toyota",
//     model: "corolla",
//     Year: 2020,
//     colors: ["Black", "White", "Red"],
//     hybrid: true,
//     drive: function () {
//         console.log("car chal rahi hai");
//     },
//     stop: function () {
//         console.log("car ruk gye hai");
//     }
// }

// console.log(car.make);
// console.log(car.colors[0]);
// car.drive();
// car.stop();

// const person1 = {
//     name: "Azam",
//     age: 20,
//     status: 'tourist'
// }

// const person2 = {
//     name: "adil",
//     age: 20,
//     status: 'resident'
// }


// function nicChecker(person) {
//     if (person.age > 18 && person.status == "resident") {
//         console.log(`${person.name} You are eligable`);
//     }
//     else {
//         console.log(`${person.name} You are not eligable`);
//     }

// }

// nicChecker(person1);
// nicChecker(person2);


// if (person1.age > 18 && person1.status == "resident") {
//     console.log(`${person1.name}   You are eligable`);
// }
// else {
//     console.log(`${person1.name}   You are not eligable`);
// }

// if (person2.age > 18 && person2.status == "resident") {
//     console.log(`${person2.name}  You are eligable`);
// }
// else {
//     console.log(`${person2.name}   You are not eligable`);
// }




// const person1 = {
//     name: 'Waris',
//     Age: 30,
//     status: "resident"
// }

// const person2 = {
//     name: 'Sufiyan',
//     Age: "28",
//     status: "tourist"
// }

// if( person1.Age > 18 && person1.status == "resident"){
//     console.log("you are allowed");
// }
// else{
//     console.log("you are not allowed");

// }

// if( person2.Age > 18 || person2.status == "resident"){
//     console.log("you are allowed");
// }
// else{
//     console.log("you are not allowed");

// }



// for loop

// const menu = ['Biryani', 'Korma', 'chicken cheese handi', 'zarda', 'Pan', 'custord'];

// let userWish = prompt('Kia khayen gye app');
// let dishFound  = false;
// for (i = 0; i < menu.length; i++) {
//     if (userWish === menu[i]) {
//         console.log("ye lijye " + menu[i]);
//         dishFound =  true;
//         break;
//     }
// }

// if (!dishFound) {
//     console.log("Dafa hojao");
// }


// ----------------------TASK SLIDE 90 -------------------->>

let student = [
    {
        id: 1,
        name: 'azam',
        score: 80,
        favorietSubject: 'programming'
    },
    {
        id: 2,
        name: 'adil',
        score: 70,
        favorietSubject: 'urdu'
    },
    {
        id: 3,
        name: 'sumair',
        score: 95,
        favorietSubject: 'Accounting'
    },
    {
        id: 4,
        name: 'zohaib',
        score: 75,
        favorietSubject: 'urdu'
    },
    {
        id: 5,
        name: 'naseem',
        score: 70,
        favorietSubject: 'History'
    }
]


let updatedStudents = student.map(function(eachStudent) {
    return {
        ...eachStudent,
        role: 'student'
    }
})

console.log(updatedStudents);



let highScores = student.filter(function(eachStudent) {
    return eachStudent.score >= 80;
})

console.log(highScores);

let specificID = student.find(function(eachStudent) {
    return eachStudent.id = 1;
})

console.log(specificID);


// --------------OWN PRACTICE

let mapStudent = student.map(function(eachStudent) {
    return eachStudent.score - 10;
})

console.log(mapStudent);
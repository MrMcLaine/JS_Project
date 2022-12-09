
let numbers = [12, 7, 53, -4, 15, 27, 18, 99, -71, 1, 0, 2, 33, -33, -10, 15, 77, 100, 88, 20];

// 1

function compareNumbers(a, b) {
    return a - b;
}

numbers.sort(compareNumbers);
numbers.reverse();

console.log(numbers);

// 2

let positiveNumbers = numbers.filter(function (number){
    return number > 0;
});

console.log(positiveNumbers);

let negativeNumbers = numbers.filter(function (number){
    return number < 0;
});

console.log(negativeNumbers);

//3

let students = [
    {name: 'student1', yearOfStudying: 2019, facultyName: 'Pharmacy'},
    {name: 'student2', yearOfStudying: 2020, facultyName: 'Business'},
    {name: 'student3', yearOfStudying: 2021, facultyName: 'Medicine'},
    {name: 'student4', yearOfStudying: 2022, facultyName: 'Engineering'},
    {name: 'student5', yearOfStudying: 2018, facultyName: 'Information'},
    {name: 'student6', yearOfStudying: 2019, facultyName: 'Arts'},
    {name: 'student7', yearOfStudying: 2020, facultyName: 'Engineering'},
    {name: 'student8', yearOfStudying: 2021, facultyName: 'Business'},
    {name: 'student9', yearOfStudying: 2022, facultyName: 'Medicine'},
    {name: 'student10', yearOfStudying: 2018, facultyName: 'Pharmacy'},
];

console.log(students);

let facultyNameArr = students.map(function (student) {
    return student.facultyName;
});

console.log(facultyNameArr);

let yearOfStudyingArr = students.map(function (student) {
    return student.yearOfStudying;
});

let yearsOfStudyingSum = yearOfStudyingArr.reduce(function(sum, currentValue){
    return sum + currentValue;
}, 0);

console.log(yearsOfStudyingSum);





'use strict'

//1

var user = {};
user.name = 'Pylyp';
user.surname = 'Shevshenko';
console.log(user);
user.name = 'Sergiy';
console.log(user);
delete user.name;
console.log(user);

//2

var employeeSalaries = {}

employeeSalaries.salary1 = 10000;
employeeSalaries.salary2 = 20000;
employeeSalaries.salary3 = 30000;

console.log(employeeSalaries);

var summ = 0;
for (var propertiesSalary in employeeSalaries) {
    summ += employeeSalaries[propertiesSalary];
}
console.log(summ);

//3

customFunction(23, 30, 'subtraction');

function customFunction(number1, number2, operation) {
    try {
        if (Number.isInteger(number1)
            && Number.isInteger(number1)
            && (operation === 'multiplication'
                || operation === 'division'
                || operation === 'addition'
                || operation === 'subtraction')) {
            switch (operation) {
                case 'multiplication':
                    console.log(number1 * number2);
                    break;
                case 'division':
                    console.log(number1 / number2);
                    break;
                case 'addition':
                    console.log(number1 + number2);
                    break;
                case 'subtraction':
                    console.log(number1 - number2);
                    break;
            }
        } else {
            throw new SyntaxError();
        }
    } catch (err) {
        console.log('error');
    }
}
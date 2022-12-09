'use strict'

var arr = [1, 2, 3, 4, 5];

//1

function productService(products) {
    return products[products.length - 1];
}

console.log(productService(arr));

//2

var styles = ['Jazz', 'Bluz'];
styles.push('Rock and roll');
styles.splice(-2, 1, 'Classic');
console.log(styles.shift());
styles.splice(0, 0, 'Rap', 'Reggy');
console.log(styles);

//3

function find(arr, value) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            index = i;
        }
    }
    return index;
}

console.log(find(styles, 'Rock and roll'));
console.log(find(styles, 'Rock'));

//4

function filterRange(array, a, b) {
    let arrayToReturn = [];
    for (let i = a; i < b + 1; i++) {
        if (Number.isInteger(array[i])) {
            arrayToReturn.push(array[i]);
        }
    }
    return arrayToReturn;
}

styles.push(8, 9);
console.log(styles);
console.log(filterRange(styles, 5, 5));

//5

function camelize(str) {
    let arrayToJoin = [];
    let arr = str.split('-');
    for (let i = 0; i < arr.length; i++) {
        let arrTemp = arr[i].split('');
        arrTemp[0] = arrTemp[0].toUpperCase();
        arrayToJoin[i] = arrTemp.join('');
    }
    return arrayToJoin.join('');
}

let temp = 'my-short-string';
console.log(camelize(temp));


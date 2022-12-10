function makeBuffer() {
    let buffer = '';

    function buffered() {
        return buffer;
    }

    buffered.add = function (value) {
        buffer += value + ' ';
    }

    buffered.clear = function () {
        buffer = '';
    }
    return buffered;
}

let buffer = makeBuffer();
// додати значення до буферу
buffer.add('JavaScript');
buffer.add('Вчити');
buffer.add('Потрібно!');

// отримати поточне значення
console.log(buffer());
// JavaScript Вчити Потрібно!
buffer.clear();
buffer.add(0);
buffer.add(1);
buffer.add(0);

console.log(buffer());


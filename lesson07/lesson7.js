function writeSomeText() {
    var elements = document.querySelectorAll('ul>li:empty');
    for (var i = 0; i < elements.length; i++) {
        var currentElement = elements[i];
        currentElement.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Ad cum enim maxime modi necessitatibus, pariatur possimus quaerat repudiandae tenetur vel!';
    }
    var allLiCounter = document.getElementById('allLiCounter');
    allLiCounter.innerHTML = 'Counter of Li is ' + elements.length;
}

function paintLinks() {
    var elements = document.getElementsByTagName('a');
    for (var i = 0; i < elements.length; i++) {
        var currentElement = elements[i];
        if (currentElement.innerHTML.startsWith('http') || currentElement.innerHTML.startsWith('ftp')) {
            if (currentElement.innerHTML.startsWith('http://internal.com')) {
            } else {
                currentElement.className = 'external-red';
            }
        }
    }
}
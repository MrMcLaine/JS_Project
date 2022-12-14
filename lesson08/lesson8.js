//1

function disappearText() {
    document.getElementById('text').hidden = true;
}

//2

function disappearBtn() {
    document.getElementById('btn').hidden = true;
}

//3

university.onclick = function () {
    var display = document.getElementById('itemId').style.display;
    if (display === 'none') {
        document.getElementById('itemId').style.display = `block`;
    } else {
        document.getElementById('itemId').style.display = `none`;
    }
}
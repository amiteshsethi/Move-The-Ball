var circle = document.getElementById('ball');

var MoveBy = 70;

window.addEventListener('load', function () {
    circle.style.position = 'absolute';
    circle.style.left = '0px';
    circle.style.top = '0px';
});

function keying(event) {
    if (event.keyCode == 87) { //w
        document.getElementById('ball').style.top = (parseInt(document.getElementById('ball').style.top) - MoveBy) + 'px';

        // document.getElementById('ball').style.top = `calc(${document.getElementById('ball').style.top}+${MoveBy}px)`;
        // circle.style.top = `calc(${circle.style.top}+${MoveBy}px)`

    } else if (event.keyCode == 65) {
        document.getElementById('ball').style.left = (parseInt(document.getElementById('ball').style.left) - MoveBy) + 'px';
    } else if (event.keyCode == 83) {
        document.getElementById('ball').style.top = (parseInt(document.getElementById('ball').style.top) + MoveBy) + 'px';
    } else if (event.keyCode == 68) {
        document.getElementById('ball').style.left = (parseInt(document.getElementById('ball').style.left) + MoveBy) + 'px';

    }

}

document.addEventListener('keyup', keying, false);
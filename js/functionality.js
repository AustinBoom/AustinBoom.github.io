let counter = 0;

document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            document.getElementById("left").click();
            document.getElementById("left").style.backgroundColor = getRandomColor();

            break;
        case 'ArrowRight':
            document.getElementById("right").click();
            document.getElementById("right").style.backgroundColor = getRandomColor();
            break;
        case 'ArrowUp':
            document.getElementById("up").click();
            document.getElementById("up").style.backgroundColor = getRandomColor();
            break;
        case 'ArrowDown':
            document.getElementById("down").click();
            document.getElementById("down").style.backgroundColor = getRandomColor();
            break;
    }
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function click1(){
    counter++;
    document.getElementById("ButtonDisplay").innerHTML = "The button has been pressed " + counter + " times.";
}

function clickL(){
    document.getElementById("ButtonDisplay").innerHTML = "The button has been pressed left and " + counter + " times.";
}

function clickR(){
    document.getElementById("ButtonDisplay").innerHTML = "The button has been pressed right and " + counter + " times.";
}

function clickU(){
    document.getElementById("ButtonDisplay").innerHTML = "The button has been pressed up and " + counter + " times.";
}

function clickD(){
    document.getElementById("ButtonDisplay").innerHTML = "The button has been pressed down and " + counter + " times.";
}
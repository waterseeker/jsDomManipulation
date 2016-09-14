var btn = document.createElement("button");
var text = document.createTextNode("click here");

//create global counter to count squares on the page
var counter = 0;

btn.addEventListener('click', addSquare);
btn.style.margin = '20px';
btn.style.display = 'inline';
btn.appendChild(text);
document.body.appendChild(btn);

//adding square
function addSquare() {
    //creating square
    var square = document.createElement('div');

    //modifying square
    square.style.backgroundColor='black';
    square.style.height='50px';
    square.style.width='50px';
    square.style.display="inline-block";
    square.style.margin='10px';
    square.style.textAlign='center';
    square.style.lineHeight='50px';

    //increase counter everytime you addSquare
    counter++;
    square.innerHTML = counter;

    //assign counter as the id
    square.id = counter;

    //event listeners for every square
    square.addEventListener('click', getRandomColor);
    square.addEventListener('mouseover', displayNumber);
    square.addEventListener('mouseout', removeNumber);
    square.addEventListener('dblclick', removeSquare);

    //put the square on the page
    document.body.appendChild(square);


    function getRandomColor() {
        //generate random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        //make random color background
        square.style.backgroundColor = color;
    }

    function displayNumber() {
        square.style.color = 'white';
    }

    function removeNumber() {
        square.style.color= 'transparent';
    }

    function removeSquare() {
        if (counter % 2 == 0) {
            square.nextElementSibling.remove();
    }
    else {
            square.previousElementSibling.remove();
    }

    }
    };

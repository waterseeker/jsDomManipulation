var btn = document.createElement ("button");

var text = document.createTextNode ("CLICK MEH!");

btn.appendChild(text);

btn.addEventListener ("click", addSquare);

document.body.appendChild(btn);

function addSquare() {
    
}

var square = document.createdElement('div');
    square.style.backgroundColor = 'red';
    square.style.height = '7em';
    square.style.width = '7em';
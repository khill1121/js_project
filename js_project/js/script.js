const image = document.querySelector('#color');

let golden = "images/Golden_Tortoise_Beetle.jpg";
let red = "images/Red_Tortoise_Beetle.jpg";

image.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', red);
};

image.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', golden);
};


// get elements from DOM, make variables
const clicker = document.querySelector('button');
const myText = document.querySelector('#learn');

// hide the P
myText.style.display = 'none';

// make button work
clicker.onclick = showAndHide;

// this function runs each time button is clicked
function showAndHide() {
  if (myText.classList.contains('showing')) {
    // hide it
    myText.style.display = 'none';
    // remove class
    myText.classList.remove('showing');
  } else {
    // show it
    myText.style.display = 'block';
    // add class
    myText.classList.add('showing');
  }
}

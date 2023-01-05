const images = document.querySelectorAll('.slider-line');
let i = 0;
let prev = false;

images[i].style.display = 'block';

setInterval(slider, 2500);

function slider() {
	images[i].style.display = 'none';
	if(i == images.length-1) prev = true;
	prev ? prevImg() : nextImg();
}

function nextImg() {
	i++;
	images[i].style.display = 'block';
}

function prevImg() {
	i--;
	images[i].style.display = 'block';
	if(i == 0) prev = false;
}

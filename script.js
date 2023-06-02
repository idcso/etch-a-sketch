const container = document.querySelector('.container');
const setSizeButton = document.querySelector('.button');
const containerWidth = 480;
let num = 16;

function createGrid(num) {
	for (let i = 0; i < num * num; i++) {
		let div = document.createElement('div');
		div.style.width = `${containerWidth / num - 2}px`;
		div.style.height = div.style.width;
		container.appendChild(div).className = 'squareDiv';
	}
}

createGrid(num);

container.addEventListener('mouseover', event => {
	event.target.style.backgroundColor = 'violet';
});

setSizeButton.addEventListener('click', () => {
	for (let i = 0; i < num * num; i++) {
		let div = document.querySelector('.squareDiv');
		div.remove();
	}

	newGrid();
});

function newGrid() {
	num = +prompt('Set grid size (0 to 100):');

	if (num > 0 && num < 100) {
		createGrid(num);
	} else {
		alert('Choose a number between 0 and 100');
		newGrid();
	}
}
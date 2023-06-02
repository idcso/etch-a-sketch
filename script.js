const container = document.querySelector('.container');
const containerWidth = 480;
let num = 16;

for (let i = 0; i < num * num; i++) {
	let div = document.createElement('div');
	div.style.width = `${containerWidth / num - 2}px`;
	div.style.height = div.style.width;
	container.appendChild(div).className = 'squareDiv';
}

container.addEventListener('mouseover', event => {
	event.target.style.backgroundColor = 'violet';
});
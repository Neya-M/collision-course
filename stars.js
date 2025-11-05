function createStars() {
	const numberOfStars = 100;
	for (let i = 0; i < numberOfStars; i++) {
		const star = document.createElement('div');
		star.classList.add('star');
		const size = Math.random() * 3 + 1;
		star.style.width = `${size}px`;
		star.style.height = `${size}px`;
		star.style.left = `${Math.random() * 100}vw`;
		star.style.top = `${Math.random() * 100}vh`;
		document.body.appendChild(star);
	}
}

createStars();

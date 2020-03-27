document.addEventListener("DOMContentLoaded", function () {
  /*
    Poniżej napisz kod rozwiązujący zadania
  */
  // exc 0
	const ex5ElementUl = document.querySelector('.ex5 > ul');
	Array
		.from(ex5ElementUl.children)
		.forEach((liElement, index) => {
			if (!(index % 2))
				liElement.style.background = 'green';
			if (index === 5)
				liElement.classList.add('big');
			if (!(index % 3))
				liElement.style.textDecoration = 'underline';
		});

	// exc1
	const ex1Element = document.querySelector('.ex1');
	const edge = document.querySelector('.edge');
	const chromeElement = document.querySelector('.chrome');
	const firefoxElement = document.querySelector('.firefox');
	edge.style
});

document.addEventListener("DOMContentLoaded", function () {
    /*
      Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
      exc 0
   */
		let titleElement = document.querySelector('.title');
		let dataAnimation = getDataAnimation(titleElement);

		// exc 1
		let homeElementQuerySelector = document.querySelector('#home');
		let homeElementGetElementById = document.getElementById('home');
		let liElement = document.querySelector('li[data-direction]');
		let blockElement = document.querySelector('.block');
		console.log(`exc1`, homeElementQuerySelector, homeElementGetElementById, liElement, blockElement);

		// exc 2
		let navTagLiElement = document.querySelectorAll('nav > ul > li');
		let divTagParagraphElement = document.querySelectorAll('div > p');
		let artTagDivElement = document.querySelectorAll('article > div');
		console.log(`exc2`, navTagLiElement, divTagParagraphElement, artTagDivElement);

		// exc 3
		// podpunkt 2 wypisuje elementy h2,
		// h1 nie są obecne w strzukturze DOM dostepnego dokumentu html

		let artTagClassNameFirst = document.querySelector('article[class=first]');
		let countH2 = 0;
		Array
			.from(artTagClassNameFirst.children[0].children)
			.forEach(divElement => Array
					.from(divElement.children)
					.forEach(child => (child.tagName === 'H2') && countH2++));
		console.log(`exc3`, countH2);
});

function getDataAnimation(element) {
	return element.attributes['data-animation'].value;
}

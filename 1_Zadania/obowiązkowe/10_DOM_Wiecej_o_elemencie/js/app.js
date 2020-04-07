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
	const chrome = document.querySelector('.chrome');
	const firefox = document.querySelector('.firefox');
	const links = document.querySelectorAll('.exercise > div > a[href*="www"]');
	edge.style.backgroundImage = "../assets/img/edge.png";
	chrome.style.backgroundImage = "../assets/img/chrome.png";
	firefox.style.backgroundImage = "../assets/img/firefox.png";
	links.forEach((link, index) => {
		if (index === 0) {
			link.innerHTML = "Chrome";
			link.attributes[0].value = "https://www.google.com/intl/pl_pl/chrome/";
		}
		if (index === 1) {
			link.innerHTML = "Edge";
			link.attributes[0].value = "https://www.microsoft.com/pl-pl/edge";
		}
		if (index === 2) {
			link.innerHTML = "Firefox";
			link.attributes[0].value = "https://mozilla.org/pl/firefox/new/";
		}
	});
	chrome.style.width = "100 px";
	// exc2
	const nameElem = document.querySelector('#name');
	const favColor = document.querySelector('#fav_color');
	const favMeal = document.querySelector('#fav_meal');
	nameElem.innerHTML = 'Michał Jaracz';
	favColor.innerHTML = 'Turquoise Blue';
	favMeal.innerHTML = 'Zapiekany schab ze śliwka';
	// exc3

});

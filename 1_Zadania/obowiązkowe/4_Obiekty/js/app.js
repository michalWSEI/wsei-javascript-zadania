const city = {
	capital: '',
	population: 0,
	president: '',
	primeMinisters: ['', '', '']
};

const timeMachine = {
	shape: '',
	model: '',
	run: (data, place) => {

	}
};

// exc 1
const book = {
	title: 'exampleBookTitle',
	author: 'exampleAuthor',
	numberOfPages: '480'
};

function logObjBook(obj) {
	console.log(`title: ${obj.title}, author: ${obj.author}, numberOfPages: ${obj.numberOfPages}`)
}

logObjBook(book);

// exc 2
const person = {
	name: 'exampleName',
	age: 'exampleAge',
	sayHello: () => {
		console.log('hello')
	}
};

// exc 3
const przepis = {
	title: 'Browne',
	servings: 4,
	ingredients: ['maką 120 gram', 'cukier puder 120 gram', '2x jajka', 'gorzka czekolada 120 gram']
};

// exc 4
// js/zadanie04.js

// exc 5
// js/zadanie05.js

// exc 6

const spoon = {
	isExist: true
};

let fork = spoon;
fork.isExist = false;

console.log(spoon.isExist);

// exc 0
function distFromAvarage(arr) {
	let avarage = 0;
	const result = [];
	avarage = -setUpAvarage(arr);
	console.log(avarage);
	arr
		.sort()
		.forEach(item => {
			result.push(avarage);
			++avarage;
		});
	return result;
}

function setUpAvarage(arr) {
	return (arr.reduce((prevNr, currNr) => prevNr + currNr) / arr.length - 1);
}

console.log(distFromAvarage([1,2,3,4,5,6,7]));

// exc 1

function showFruits() {
	const theBestFruits = [
		'apple',
		'orange',
		'mango',
		'pineapple'
	];
	console.log(`the first one element: ${theBestFruits[0]}`);
	console.log(`the last one element: ${theBestFruits[theBestFruits.length - 1]}`);
	for (let i = 0; i < theBestFruits.length; ++i) {
		console.log(`index: ${i} element: ${theBestFruits[i]}`)
	}
}
showFruits();

// exc 2
// changes in file zadanie02.js

// exc 3
function printTable(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
printTable([0,1,2,3,4,5,6]);

// exc 4
function multiply(arr) {
	let result = 1;
	for (let i = 0; i < arr.length; i++) {
		result *= arr[i]
	}
	return result;
}

// exc 5
function getEvenAvarage(arr) {
	const evenArr = arr.filter(item => (item % 2 === 0));
	return (evenArr.length)
		? Math.floor((evenArr.reduce((prevNr, currNr) =>  prevNr + currNr) / evenArr.length) * 1000) / 1000
		: null;
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]));

// exc 6
function sortArray(arr) {
	return arr.sort((a, b) => a - b);
}
console.log(sortArray([145,11,3,64,4,6,10]));


// exc 7
function addArrays(arr, arr1) {
	return (arr.length > arr1.length)
		? arr.map((item, index) => {
				if (index < arr1.length) return item + arr1[index];
				else return item;
			})
		: arr1.map((item, index) => {
				if (index < arr.length) return item + arr[index];
				else return item;
			})
}

console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));

// exc 0

const car = {
	brand: '',
	color: '',
	numberOfKilometers: 0,
	printCarInfo: () => {
		console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}km`)
	},
	drive: (nr) => {
		this.numberOfKilometers += nr
	}
};

// exc 1

Object.defineProperty(car, 'dataOverview', ['02-12-2012', '03-01-2018']);
Object.defineProperty(car, 'addDateOverview', () => {
	this.dataOverview.push('02-12-2019');
	return this.dataOverview;
});

// exc 2
// js/zadanie02.js

// exc 3
const stairs = {
	step: 0,
	up: () => {
		this.step++
	},
	down: () => {
		this.step--
	},
	printStep: () => {
		console.log(this.step);
	}
};

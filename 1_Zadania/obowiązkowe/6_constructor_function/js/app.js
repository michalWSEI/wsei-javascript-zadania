// exc 0
class Basket {
	products = [];
	sum = 0;
	constructor() {}
	addProduct(name, price) {
		this.products.push({name: name, price: price})
	}
	showBasket() {
		this.sum = this.products.reduce(((previousValue, currentValue) => previousValue + currentValue));
		this.products.forEach((product, index) => {
			console.log(`${++index}) name: ${product.name} price: ${product.price}`)
		})
	}
}

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

// exc 1
// js/zadanie1.js

// exc 2
// js/zadanie2.js

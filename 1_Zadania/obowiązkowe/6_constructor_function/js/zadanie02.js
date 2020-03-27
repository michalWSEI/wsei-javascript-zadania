class Calculator {
	history = [];
	add(num1, num2) {
		this.history.push('added num1 to num2 got result');
		return num1 + num2
	}
	multiply(num1, num2) {
		this.history.push('multiplied num1 with num2 got result');
		return num1 * num2
	}
	subtract(num1, num2) {
		this.history.push('subtracted num1 from num2 got result');
	}
	printOperations() {
		this.history.forEach(item => console.log(item));
	}
	clearOperations() {
		this.history = [];
	}
}

let count = 0;

function countHallo(nr) {
	setInterval((count) => console.log('Hello ', count++), 100, count);

}


countHallo(10);

saySomething();

function saySomething(words) {
	words
		? console.log('saySomething' + words)
		: console.log('Cześć');
}

saySomething();

sayVarSomething();

const sayVarSomething = function () {
	console.log('Witaj');
};

sayVarSomething();

// gdy deklarujemy funkcje za pomoca wyrazenia fnkcynego ( przypisujac do danej zmiennej, stałej )
// możemy wywołać ta funckje dopiero po zadeklarowaniu,
// kazda próba wywołania przed, funkcji zadeklarowanej w taki sposb zatrzyma runtime, zwracając error

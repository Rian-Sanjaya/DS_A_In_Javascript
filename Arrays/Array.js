// CREATING AND INITIALIZING ARRAYS

var dayOfWeek = new Array();
var dayOfWeek = new Array(7);
var dayOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

var dayOfWeek = [];
var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// TO KNOW HOW MANY ELEMENTS ARE IN THE ARRAY (ITS SIZE)

dayOfWeek.length;

// ACCESSING ELEMENTS AND ITERATING AN ARRAY

for (var i=0; i<dayOfWeek.length; i++) {
	console.log(dayOfWeek[i]);
}

// FIND THE FIRST 20 NUMBERS OF THE FIBONACCI SEQUENCE

function fibonacci(number) {
	var fibonacci = [];

	fibonacci[0] = 1;
	fibonacci[1] = 2;
	for (var i=2; i<number; i++) {
		fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
	}

	console.log(fibonacci);
} 

fibonacci(20);
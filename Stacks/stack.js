function Stack() {
	let items = [];  // use array as a data structure

	this.push = function(element) {
		items.push(element);
	};

	this.pop = function() {
		return items.pop();
	};

	this.peek = function() {
		return items[items.length-1];
	};

	this.isEmpty = function() {
		return items.length == 0;
	};

	this.size = function() {  // similar to the length property from the array class, for collections we usually use the term size
		return items.length;
	};

	this.clear = function() {
		items = [];
	};

	this.print = function() {
		return console.log(items.toString());
	};

	this.decimalToBinary = function(decNumber) {
		var remStack = new Stack(),
			rem,
			binString = '';

		while (decNumber > 0) {
			rem = Math.floor(decNumber % 2);
			remStack.push(rem);
			decNumber = Math.floor(decNumber / 2);
		}

		while (!remStack.isEmpty()) {
			binString += remStack.pop().toString();
		}

		return binString;
	}

	this.baseConverter = function(decNumber, base) {
		var remStack = new Stack(),
			rem,
			baseString = '',
			digits = '0123456789ABCDEF';

		while (decNumber > 0) {
			rem = Math.floor(decNumber % base);
			remStack.push(rem);
			decNumber = Math.floor(decNumber / base);
		}

		while (!remStack.isEmpty()) {
			baseString += digits[remStack.pop()];
		}

		return baseString;
	}
}


let stack = new Stack();
stack.isEmpty();
stack.push(5);
stack.push(8);
stack.peek();
stack.push(11);
stack.size();
stack.isEmpty();
stack.push(15);
stack.pop();
stack.pop();
stack.size();
stack.print();
console.log(stack.decimalToBinary(10));
console.log(stack.baseConverter(10, 2));
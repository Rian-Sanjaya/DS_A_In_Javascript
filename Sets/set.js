function Set() {
	let items = {};

	this.has = function(value) {
		return items.hasOwnProperty(value);
	};

	this.add = function(value) {
		if (!this.has(value)) {
			items[value] = value;
			// console.log(items);
			return true;
		}

		return false;
	};

	this.delete = function(value) {
		if (this.has(value)) {
			delete items[value];
			return true;
		}

		return false;
	}

	this.clear = function() {
		items = {};
	}

	this.size = function() {
		// works with modern browser (IE9+, FF4+, Chrome5+, Opera12+, Safari5+, and so on)
		return Object.keys(items).length;

		// works with any browser
		// var count = 0;

		// for (var key in items) {
		// 	if (items.hasOwnProperty(key))
		// 		++count;
		// }

		// return count;
	}

	this.values = function() {
		let values = [];

		for (let i=0, keys=Object.keys(items); i<keys.length; i++) {
			if (items.hasOwnProperty(keys[i])) {
				values.push(items[keys[i]]);
			}
		}

		return values;
	}

	this.union = function(otherSet) {
		let unionSet = new Set();
		let values = this.values();

		for (let i=0; i<values.length; i++) {
			unionSet.add(values[i]);
		}

		values = otherSet.values();
		for (let i=0; i<values.length; i++) {
			unionSet.add(values[i]);
		}

		return unionSet;
	}

	this.intersection = function(otherSet) {
		let intersectionSet = new Set();
		let values = this.values();

		for (let i=0; i<values.length; i++) {
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i]);
			}
		}

		return intersectionSet;
	}

	this.difference = function(otherSet) {
		let differenceSet = new Set();
		let values = this.values();

		for (let i=0; i<values.length; i++) {
			if (!otherSet.has(values[i])) {
				differenceSet.add(values[i]);
			}
		}

		return differenceSet;
	}

	this.subset = function(otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		} else {
			let values = this.values();
			for (let i=0; i<values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false;
				}
			}
		}

		return true;
	}

}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
console.log("UnionAB: " + unionAB.values());

let intersectionAB = setA.intersection(setB);
console.log("intersectionAB: " + intersectionAB.values());

let differenceAB = setA.difference(setB);
console.log("differenceAB: " + differenceAB.values());

setA.clear()
setB.clear()
setA.add(1);
setA.add(2);
setB.add(1);
setB.add(2);
setB.add(3);
let setC = new Set();
setC.add(2);
setC.add(3);
console.log("A subset B: " + setA.subset(setB));
console.log("A subset C: " + setA.subset(setC));

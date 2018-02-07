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

}

// let set = new Set();
// console.log(set.values());
// set.add(1);
// console.log(set.values());
// set.add(2);
// console.log(set.values());
// console.log(set.size());
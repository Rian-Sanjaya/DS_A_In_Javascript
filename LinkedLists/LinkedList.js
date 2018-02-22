function LinkedList() {
	let Node = function(element) {
		this.element = element;
		this.next = null;
	}

	let length = 0;
	let head = null;

	this.append = function(element) {
		// {1} crate node item passing element as its value
		// {2} a variable that points to the current list
		// {3} if head is null (the list is empty), we are the first element to the list
		// 		if head is not null
		// 		{4} reference to the first element, we iterate the list to find the last element (current.next is null)
		//		{5} then, link the current next element  to point to the node we want to add
		// {6} increment the size of the list

		let node = new Node(element),	// {1}
			current;					// {2}

		if (head === null) {			// {3} first node on list
			head = node;
		} else {
			current = head;				// {4}

			// loop until find last item
			while (current.next) {
				current = current.next;
			}

			current.next = node;			// {5} get last item and assign next to  node
		}

		length++;						// {6} update the size of list
	};

	this.insert = function(position, element) {
		// {1} we need to check the out-of-bound position
		// {6} if it is out of bound, we return the value false to indicate that no item was added to the list
		// First scenario is the case where we need to add an element at the beginning of the list, fist position

		// check for out-of-bounds values
		if (position >= 0 && position <= length) {	// {1}
			let node = new Node(element),
				previous, current = head,
				index = 0;

			if (position === 0) {					// add on first position
				node.next = current;				// {2}
				head = node;

			} else {
				while (index++ < position) {		// {3}
					previous = current;	
					current = current.next;
				}
				node.next = current;				// {4}
				previous.next = node;				// {5}
			}

			length++;								// update size of list
			return true;

		} else {
			return false;							// {6}
		}

	};

	this.removeAt = function(position) {
		// check for out-of-bounds values
		if (position > -1 && position < length) {	// {1} verify the position value is valid
			let current = head,						// {2} variable reference to the current node
				previous,							// {3} variable reference to the previous node
				index = 0;							// {4}

			if (position === 0) {					// {5} removing first item
				head = current.next
			} else {
				while (index++ < position) {		// {6} iterate the list until the desired position
					previous = current;				// {7}
					current = current.next			// {8}
				}
				previous.next = current.next;		// {9}
			}

			length--;								// {10}

			return current.element;

		} else {
			return null;							// {11}
		}
	};


	this.indexOf = function(element) {
		let current = head,
			index = -1;

		while (current) {
			index++;
			if (current.element === element) {
				return index;
			}
			current = current.next;
		}

		return -1;
	};

	this.remove = function(element) {
		let index = this.indexOf(element);
		this.removeAt(index);
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {
		return length;
	};

	this.toString = function() {
		let current = head,
			string = "";

		while (current) {
			string += current.element + (current.next ? ', ' : '');
			current = current.next;
		}

		return string;
	};

	this.getHead = function() {
		return head;
	}

	this.print = function() {};
}
function DoublyLinkedList() {
	let Node = function(element) {
		this.element = element;
		this.next = null;
		this.prev = null;
	};

	let head = null,
		tail = null,
		length = 0;

	this.append = function(element) {
		let node = new Node(element), 
			current = head, previous;

		if (head === null) {
			head = node;
			tail = node;
		} else {
			while (current) {
				previous = current;
				current = current.next;
			}
			previous.next = node;
			node.prev = previous;
			tail = node;
		}

		length++;
	}

	this.insert = function(position, element) {
		// check for out-of-bounds values
		if (position >= 0 && position <= length) {
			let node = new Node(element),
				current = head, previous, 
				index = 0;

			if (position === 0) {				// add on first position
				if (!head) {					// {1} if the list is empty
					head = node;
					tail = node;
				} else {
					node.next = current;
					current.prev = node;		// {2}
					head = node;
				}
				
			} else if (position === length) {	// last item
				current = tail;					// {3}
				node.prev = current;
				current.next = node;
				tail = node;
			} else {
				while (index++ < position) {	// {4}
					previous = current;
					current = current.next;
				}
				node.next = current;			// {5}
				previous.next = node;
				current.prev = node;
				node.prev = previous;
			}

			length++;
			return true;

		} else {
			return false;
		}
	};

	this.removeAt = function(position) {
		// look for out-of-bounds values
		if (position > -1 && position < length) {
			let current = head, previous,
				index = 0;

			// removing first item
			if (position === 0) {
				head = current.next;		// {1}
				// if there is only one item, update tail
				if (length === 1) {			// {2}
					tail = null;
				} else {
					head.prev = null;		// {3}
				}
			} else if (position === length-1) {	// last item
				current = tail;				// {4}
				tail = current.prev;
				tail.next = null;
			} else {
				while (index++ < previous) { // {5}
					previous = current;
					current = current.next;
				}

				previous.next = current.next;	// {6}
				current.next.prev = previous;
			}

			length--;
			return current.element;

		} else {
			return null;
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

	this.isEmpty = function() {
		return length === 0;
	};

	this.size = function() {
		return length;
	};

	this.toString = function() {
		let elements = "",
			current = head;

		while (current) {
			elements += current.element + (current.next !== null ? ", " : "");
			current = current.next;
		}

		return elements;
	};
}
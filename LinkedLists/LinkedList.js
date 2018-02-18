function LinkedList() {
	let Node = function(element) {
		this.element = element;
		this.next = null;
	}

	let length = 0;
	let head = null;

	// {1} crate node item passing element as its value
	// {2} a variable that points to the current list
	// {3} if head is null (the list is empty), we are the first element to the list
	// 		if head is not null
	// 		{4} reference to the first element, we iterate the list to find the last element (current.next is null)
	//		{5} then, link the current next element  to point to the node we want to add
	// {6} increment the size of the list

	this.append = function(element) {
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

		length++						// {6} update the size of list
	};

	this.insert = function(position, element) {};
	this.removeAt = function(position) {};
	this.remove = function(element) {};
	this.indexOf = function(element) {};

	this.isEmpty = function() {
		return (head === null);
	};

	this.size = function() {
		return length;
	};

	this.toString = function() {
		let elements = [],
			current;

		if (head !== null) {
			current = head;
			elements.push(current.element);
			while (current.next !== null) {
				current = current.next;
				elements.push(current.element);
			}
		}

		return elements.toString();
	};

	this.print = function() {};
}
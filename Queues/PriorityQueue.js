function PriorityQueue() {
	let items = [];

	function QueueElement(element, priority) {	// {1}
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		let queueElement = new QueueElement(element, priority);
		let added = false;

		for (let i=0; i<items.length; i++) {
			if (queueElement.priority < items[i].priority) {	// {2}
				items.splice(i, 0, queueElement);				// {3}
				added = true;
				break;											// {4}
			}
		}

		if (!added) {
			items.push(queueElement);							// {5}
		}
	};

	this.print = function() {
		for (let i=0; i<items.length; i++) {
			console.log(items[i].element + ' - ' + items[i].priority);
		}
	};

	this.dequeue = function() {
		return items.shift();
	}

	this.front = function() {
		return items[0];
	};

	this.isEmpty = function() {
		return items.length == 0;
	};

	this.size = function() {
		return items.length;
	};
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();

// {1} define special element (an object) that containe the element (can be any type), plus the priority on the queue.
// {2} first we need to compare the priority of the element to be added to the rest of the elements priority. 
//		when we find an item that has a higher priority than the element we are trying to add, then we insert the new element
//		one position before (with this logic, we also respect the other elements with the same priority, but which were added
//		to the queue first).
// {3} we use array splice method to insert the new element.
// {4} we stop looping the queue. this way, our queue will be sorted and organized by priority.
// {5} if the priority we are addding is greater than any priority already added, or if the queue is empty,
//		we simply add to the end of the queue.

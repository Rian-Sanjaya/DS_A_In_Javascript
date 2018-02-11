function hotPotato(nameList, num) {
	let queue = new Queue();	// {1}

	for (let i=0; i<nameList.length; i++) {
		queue.enqueue(nameList[i]);	// {2}
	}

	let eliminated = '';

	while (queue.size() > 1) {
		for (let i=0; i<num; i++) {
			queue.enqueue(queue.dequeue());	// {3}
		}

		eliminated = queue.dequeue();	// {4}
		console.log(eliminated + ' was eliminated from the Hot Potato game.');
	}

	return queue.dequeue();	// {5}
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);

// {1} use Queue class to implement a simulation of this game.
// {2} get a list of names, and queue all of them.
// {3} iterate the queue untill the given number of times.
//		each iteration, we will remove an item from the beginning of the queue, and add it to the end of the queue
//		(because we will remove the first element (based on the queue principal) at the end of iteration, 
//		if you passed the hot potato to your neighbor, you are not threatened to be eliminated right away).
// {4} once we reach the iteration number, the person that has the hot potato is eliminated (removed from the queue-line).
// {5} when there is only one person left, this person is declared the winner.

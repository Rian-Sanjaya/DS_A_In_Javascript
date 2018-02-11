THE QUEUE DATA STRUCTURE

- an ordered collection of items that follows the FIFO (First In First Out)
- addition of new elements is at the tail, and the removal is from the front
- real life examples:
	- lines for movies, cafeteria, checkout line at a grocery store
	- example in computer science is the printing line

THE QUEUE CLASS

- a data structure to store the elements of the queue
- enqueue(element(s)): adds a new item (or several items) at the back of the queue
- dequeue(): removes the first element from the queue. it returns the removed element
- front(): returns the first element from the queue. it does not remove the element
- isEmpty(): returns true if the queue does not contain any elements, and false if the queue is bigger than 0
- size(): returns the number of elements the queue contains


PRIORITY QUEUE

- elements are added and removed based on a priority.
- real life example 
	the boarding line at airport. the first class and businesss class get priority over coach class passengers
	waiting room for patients in hospital (emergency department). severe condition patients are seen prior to less severe condition
- two options implementing a priority queue:
	- set the priority and add the element at the correct position
	- queue the elements as they are added to the queue, and remove them according to priority
- for this example, we will add the element at their correct position, so we can dequeue them by default


 THE CIRCULAR QUEUE - HOT POTATO

 - another modified version of the queue implementation.
 - an example is the Hot Potato game. In this game, children are organized in a circle, and they pass the hot potato to their neighbor
 as fast as they can. At the certain point of the game, the hot potato stops being passed around, and the child that has the hot potato
 is removed from the circle. This action is repeated until there in only one child left (the winner).
THE LINKED LIST DATA STRUCTURE

- store a sequential collection of elements, but unlike arrays, the elements are not place contiguously in memory.
- each element consists of a node that stores the element itself and also a reference (pointer) that points to next element.
- do not need to shift elements over when adding or removing them (unlike arrays).
- if we want to access an element from the middle, we need to start from the beginning (head) and iterate until we find the desired element (unlike arrays, we can directly access any element at any position).


THE LINKED LIST CLASS

- need a helper class called Node, contains element attribute (the value), and a next attribute (the pointer).
- length property that stores the number of items we have on the list.
- head property to store a reference for the first node.
- methods:
  - append(element): adds a new item to the end of the list
  - insert(position, element): inserts a new item at a specified position
  - remove(element): removes an item from the list
  - indexOf(element): returns the index of the element in the list, return -1 if element is not in the list
  - removeAt(position): removes an item from a specified position
  - isEmpty(): returns true if the list does not contain any elements and false if the size of the list is bigger than 0
  - size(): returns the number of elements the list contains.
  - toString(): output only the element values
  
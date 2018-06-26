// HashTable class using Separate Chaning technique to handling collisions between hash tables

function HashTable() {
    // helper class to represent the element we will add to the LinkedList instance
    // this class simply store the key and value in an object instance
    // we overide toString to help us outputting the results on the browser console 
    function ValuePair(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }

    var table = [];

    var loseloseHashCode = function(key) {
        var hash = 0;

        for (var i=0; i<key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key);

        if (table[position] == undefined) {
            table[position] = new LinkedList();
        }

        table[position].append(new ValuePair(key, value));
    };

    this.get = function(key) {
        var position = loseloseHashCode(key);
        
        if (table[position] !== undefined) {
            // iterate linkedlist to find key/value
            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key)
                    return current.element.value;
                current = current.next;
            }

            // check in case of first / last element
            if (current.element.key === key)
                return current.element.value;
        }

        return undefined;
    };

    this.remove = function(key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty())
                        table[position] = undefined;
                    return true;
                }

                current = current.next;
            }

            // check in case of first / last element
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) 
                    table[position] = undefined;
                return true;
            }
        }

        return false;
    };

    this.print = function() {
        for (var i=0; i<table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ': ' + table[i]);
            }
        }
    }
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');   // 19 - Gandalf
hash.put('John', 'johnsnow@email.com');     // 29 - John
hash.put('Tyrion', 'tyrion@email.com');     // 16 - Tyrion
hash.put('Aaron', 'aaron@email.com');       // 16 - Aaron
hash.put('Donnie', 'donnie@email.com');     // 13 - Donnie
hash.put('Ana', 'ana@email.com');           // 13 - Ana
hash.put('Jonathan', 'jonathan@email.com'); // 5 - Jonathan 
hash.put('Jamie', 'jamie@email.com');       // 5 - Jamie
hash.put('Sue', 'sue@email.com');           // 5 - Sue
hash.put('Mindy', 'mindy@email.com');       // 32 - Mindy
hash.put('Paul', 'paul@email.com');         // 32 - Paul
hash.put('Nathan', 'Nathan@email.com');     // 10 - Nathan
hash.print();
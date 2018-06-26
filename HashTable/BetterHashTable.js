function HashTable() {
    var table = [];

    // Hash function with low probability of collisions
    var djb2HashCode = function(key) {
        var hash = 5381;    // {1}

        for (var i=0; i<key.length; i++) {          // {2}
            hash = hash * 33 + key.charCodeAt(i);   // {3}
        }

        return hash % 1013; // {4}
    }

    // initializing hash variable with a prime number (most implementation use 5381) {1}
    // iterate the key parameter {2}
    // multiply the hash value by 33 (used a magical number), and sum it with the ASCII value of key character {3}
    // finally, we will return the remainder division of the total hash value by another random prime number 
    // (greater than the size we think the HashTable instance) {4}

    this.put = function(key, value) {
        var position = djb2HashCode(key);
        console.log(position + ' - ' + key);    // (optional) for information purpose only, we will log the position
        table[position] = value;
    };

    this.get = function(key) {
        return table[djb2HashCode(key)];
    };

    this.remove = function(key) {
        table[ djb2HashCode(key) ] = undefined;
    };

    this.print = function() {
        for (var i=0; i<table.length; i++) 
            if (table[i] !== undefined) 
                console.log(i + ': ' + table[i]);
    };
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');   // 798 - Gandalf
hash.put('John', 'johnsnow@email.com');     // 838 - John
hash.put('Tyrion', 'tyrion@email.com');     // 624 - Tyrion
hash.put('Aaron', 'aaron@email.com');       // 215 - Aaron
hash.put('Donnie', 'donnie@email.com');     // 278 - Donnie
hash.put('Ana', 'ana@email.com');           // 925 - Ana
hash.put('Jonathan', 'jonathan@email.com'); // 288 - Jonathan 
hash.put('Jamie', 'jamie@email.com');       // 962 - Jamie
hash.put('Sue', 'sue@email.com');           // 502 - Sue
hash.put('Mindy', 'mindy@email.com');       // 804 - Mindy
hash.put('Paul', 'paul@email.com');         // 54 - Paul
hash.put('Nathan', 'Nathan@email.com');     // 223 - Nathan
hash.print();
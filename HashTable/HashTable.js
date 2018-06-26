function HashTable() {
    var table = [];

    // private method of the HashTable class
    // this type of HashTable (loseloseHashCode) can has collisions between hash tables
    var loseloseHashCode = function(key) {
        var hash = 0;

        for (var i=0; i<key.length; i++) 
            hash += key.charCodeAt(i);

        return hash % 37;   // to work with lower numbers (of index), we use modulus with an arbitrary number
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);    // (optional) for information purpose only, we will log the position
        table[position] = value;
    };

    this.get = function(key) {
        return table[loseloseHashCode(key)];
    };

    this.remove = function(key) {
        table[ loseloseHashCode(key) ] = undefined;
    };

    this.print = function() {
        for (var i=0; i<table.length; i++) 
            if (table[i] !== undefined) 
                console.log(i + ': ' + table[i]);
    };
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

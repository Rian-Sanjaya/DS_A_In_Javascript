function Dictionary() {
    var items = {};

    // return true if the key exists in the dictionary, false otherwise
    this.has = function(key) {
        return key in items;
    }

    // use to add a new value or update an existing one
    this.set = function(key, value) {
        items[key] = value;
    }

    // remove value from dictionary using the key
    this.delete = function(key) {
        if (this.has(key)) {
            delete items(key);
            return true;
        }

        return false;
    }

    // return a specific value searched by the key
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    }

    // retrive an array of  all values in the dictionary
    this.values = function() {
        var values = [];

        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }

        return values;
    }

    // remove all items from dictionary
    this.clear = function() {
        items = {};
    }

    // return how many elements the dictionary contains
    this.size = function() {
        // works with modern browser (IE9+, FF4+, Chrome5+, Opera12+, Safari5+, and so on)
        return Object.keys(items).length;

        // works in any browser
        // var count = 0;

        // for (var key in items) {
        //     if (items.hasOwnProperty(key)) {
        //         ++count;
        //     }
        // }

        // return count;
    }

    // return an array of all the keys the dictionary contains
    this.keys = function() {
        return Object.keys(items);
    }

    // 
    this.getItems = function() {
        return items;
    }
}


// Dictionary class implementation examples

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
dictionary.delete('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());
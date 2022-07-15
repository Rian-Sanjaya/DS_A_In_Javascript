// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
// the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, 
// but not in both (A △ B = C = {1, 4}). 
// For every additional symmetric difference you take (say on a set D = {2, 3}), 
// you should get the set with elements which are in either of the two the sets but not both 
// (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). 
// The resulting array must contain only unique values (no duplicates).

sym([1, 2, 3, 3], [5, 2, 1, 4]); // should return [3, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // should return [1, 4, 5]

function sym() {
    let args = [];

    for (let i=0; i<arguments.length; i++) {
        args.push(arguments[i]);
    }

    const symDiff = (arrOne, arrTwo) => {
        let results = [];

        arrOne.forEach( el => {
            if (arrTwo.indexOf(el) < 0 && results.indexOf(el) < 0) {
                results.push(el);
            }
        });

        arrTwo.forEach( el => {
            if (arrOne.indexOf(el) < 0 && results.indexOf(el) < 0) {
                results.push(el);
            }
        });

        return results;
    };

    return args.reduce( symDiff )
}

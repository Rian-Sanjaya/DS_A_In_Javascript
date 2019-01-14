function sym() {
    let args = [];

    for (let i=0; i<arguments.length; i++) {
        args.push(arguments[i]);
    }

    return args.reduce( (arrOne, arrTwo) => {
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
    });
}


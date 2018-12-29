function allUnique(str) {
    var chars = {};
    var str = str.toLowerCase().split(' ').join(''); // make all lowercase and remove all space

    for (let i=0; i<str.length; i++) {
        var value = str[i];

        if (chars[char]) return false;

        chars[char] = 1;
    }

    return true;
}

var kalimat = "abc defgh ijklm";

allUnique(kalimat) ? console.log("All character is unique.") : console.log("Not all character is unique.");
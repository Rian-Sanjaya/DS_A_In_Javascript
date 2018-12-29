function CountChars(str) {
    var chars = {};
    var str = str.toLowerCase().split(' ').join('');

    for (let i=0; i<str.length; i++) {
        var char = str[i];

        chars[char] = chars[char] || 0;
        chars[char]++;
    }

    return chars;
}

var sentence = 'Aku seorang kapiten';
var chars = CountChars(sentence);
console.log(chars);
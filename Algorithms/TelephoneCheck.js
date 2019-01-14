// ^ denotes the beginning of the string (1\s?)? checks allows for a "1" or a "1 " at the beginning.
// \d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3}) checks for three digits that are allowed to be between parenthesis.
// [\s\-]? checks for spaces or dashes between the groups of digits.
// $ denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 a").

function telephoneCheck(str) {
    // var formats = "(999)999-9999|999-999-9999|9999999999";
    // var r = RegExp("^(" +
    //            formats
    //              .replace(/([\(\)])/g, "\\$1")
    //              .replace(/9/g,"\\d") +
    //            ")$");

    // return r.test(str);

    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
    return regex.test(str);
  }
  
  
  
  telephoneCheck("555-555-5555");
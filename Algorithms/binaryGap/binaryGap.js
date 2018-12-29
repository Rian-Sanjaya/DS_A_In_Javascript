// decimal    binary            binary gap
// 9          1001              2
// 529        1000010001        4
// 20         10100             1
// 15         1111              0
// 32         100000            0

function binaryGap(N) {
    var currentZeros = 0,
        maxZeros = 0,
        // convert an N decimal number to a binary number
        binStr = Math.abs(N).toString(2); 
    
    for (let i=0; i<binStr.length; i++) {
        if (binStr[i] === '0') {
            currentZeros += 1;
        } else {
            if (currentZeros > maxZeros) {
                maxZeros = currentZeros;
            }
            currentZeros = 0;
        }
    }
    
    return maxZeros;
}
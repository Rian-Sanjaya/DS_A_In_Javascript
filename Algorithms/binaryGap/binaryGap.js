function binaryGap(N) {
    var currentZeros = 0,
        maxZeros = 0,
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
function cyclicRotation(A, K) {
    let arr = [];
    
    for (let i=0; i<K; i++) {
        for (let j=0; j<A.length; j++) {
            if (j === A.length-1) {
                arr[0] = A[j];
            } else {
                arr[j+1] = A[j];
            }
        }
        A = arr;  // we only assign variable A referencing to the same array object as variable arr
        arr = []; // so we need to make variable arr to refer a new array object
    }
    
    return A;
}
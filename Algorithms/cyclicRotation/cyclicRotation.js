// For example, given

//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

// For another example, given

//     A = [0, 0, 0]
//     K = 1
// the function should return [0, 0, 0]

// Given

//     A = [1, 2, 3, 4]
//     K = 4
// the function should return [1, 2, 3, 4]

function cyclicRotation(A, K) {
    let arr = [];
    
    for (let i=0; i<K; i++) {   // loop to the no. of K times
        for (let j=0; j<A.length; j++) {    // loop to the no. of A (array) lenght
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
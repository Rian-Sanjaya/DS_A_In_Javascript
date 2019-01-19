function solution(A) {
    let count = 0;
    let flag = 0;
    let Arr = A.slice(0);
    let len = Arr.length;
    
    for (let i=0; i<len; i++) {
        Arr.splice(i, 1);
        flag = 0;

        for (let j=0; j<Arr.length; j++) {
            if (Arr[j] > Arr[j+1]) {
                flag = 1;
                break;
            } 
        }
        
        if (flag === 0) 
            count++;
        
        Arr = A.slice(0);
    }
    
    return count;
    // console.log(count);
}

var ar = [4,5,2,3,4];
solution(ar);
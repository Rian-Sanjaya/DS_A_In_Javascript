function solution(A){
    let coin1 = A.filter(x=> x== 1).length;
    let coin0 = A.length - coin1;
    return coin1 > coin0 ? coin0: coin1;
}


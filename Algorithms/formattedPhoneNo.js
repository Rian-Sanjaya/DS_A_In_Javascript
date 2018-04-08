// format phoe number
// 1.
// 4-2 1 4  5-7 23"
// "421-457-23"
//
// 2.
// "34 5 08 31223"
// "345-083-12-23"
//
// 3.
// "123453812342"
// "123-453-812-342"

function solution(S) {
    var no = '',
        ph = [],
        x = 1;
    
    S = S.replace(/\s/g,'');
    S = S.replace(/-/g,'');
    
    var len = S.length;
    
    if (len < 4) return S;
    
    var remone = (len % 3) === 1 ? 1 : 0;
    
    for (var i=0; i<S.length; i++) {
        if (remone === 1 && len <= 4) {
            if (x < 3)
                no += S[i];
            else {
                ph.push(no);
                no = S[i];
                x = 1;
            }
            x++;
            
        } else {
            if (x < 4) 
                no += S[i];
            else {
                ph.push(no);
                no = S[i];
                x = 1;
            }
            x++;
        }
        
        len--;
    }
    
    ph.push(no);
    return ph.join('-');
}
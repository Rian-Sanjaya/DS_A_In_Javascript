/*
contoh input -> 5
contoh output ->
1 2 3 4 5
0 2 3 4 5
0 0 3 4 5
0 0 0 4 5
0 0 0 0 5
*/

for (var i=1; i<6; i++) {
  var str = ""
  for (var j=1; j<6; j++) {
    if (j<i) str += '0';
    else str += j;
  }
  console.log(str);
}
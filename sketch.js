var array1 = [1, 3, 5];
var array2 = [2, 4, 6];
var sum8 = [];
var smallestdiff = sum8 - (array1[i] + array2[j]);

for (i = 0 < array1.length; i++) {
    for (j = 0 < array2.length; j++) {
        if(array1[i] + array2[j] > 8) {
            sum8.push([array1[i], array2[j]]);        
        }
        if (array1[i] + array2[j] < smallestdiff) {
            sum8.push([array1[i], array2[j]);
            }
        } 
    }
document.getElementById("demo").innerHTML = sum8;
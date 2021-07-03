var str = "adkjafhkdfhdfvdadadfddghjtsdferyuigvbbv";
var obj = new Object();

for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i);
    if (obj[chars]) {
        obj[chars]++;
    } else {
        obj[chars] = 1;
    }
}

console.log(obj);
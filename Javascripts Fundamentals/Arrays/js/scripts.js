//problem 1
function createArray() {
    var array = [],
        i;
    for (i = 0; i <= 20; i++) {
        array.push(i * 5);
        document.getElementById('answerOne').innerHTML += ' ' + array[i];
    }
    console.log(array);
}
// problem  2 
function compareArrays() {
    var a = ['a', 'a', 'c'],
        b = ['a', 'a', 'c', , , , , , , , 'a'],
        len = Math.max( a.length, b.length),
        equal = true,
        i,
        sliceArray;
        for (i = 0; i < len; i++) {
            if (a[i] !== b[i]) { equal = false; break; }
    }
    document.getElementById('answerTwo').innerHTML += 'Is equal arrays?: <b>' + equal + '</b><br />Break at <b>' + i + '</b>';
    console.log(equal);
}
//poblem 3
function maxSequnce() {
    var a = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
        equals = 1,
        equalLen = 1,
        len = a.length,
        nim,
        i;
    for (i = 0; i < len; i++) {
        if ((a[i] == a[i + 1])) { equals++; } else { equals = 1;}
        if (equals > equalLen) { equalLen++; nim = a[i]; }
    }
    a = [];
    document.getElementById('answerThree').innerHTML = 'Equals elements are ' + equalLen + ' => ';
    for (i = 0; i < equalLen; i++) {
        a.push(nim);
        document.getElementById('answerThree').innerHTML += ' ' + nim;
    }
    console.log(a.join(', '));
}
// problem 4 
function maximal() {
    var a = [3, 2, 3, 4, 2, 2, 4, 4];
    //type 1
    function uniq(b) {
        return b.sort().filter(function (item, pos, ary) {
            return !pos || item != ary[pos - 1];
        })
    }
    console.log(uniq(a).join(', '));
    //type 2
    function uniq_fast(b) {
        var seen = {};
        var out = [];
        var len = b.length;
        var j = 0;
        for (var i = 0; i < len; i++) {
            var item = b[i];
            if (seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
    }
    console.log(uniq_fast(a).join(', '));
}

// problem 5 
function selectionSort() {
    var a = [8, 1, 38, 89, 1, 9, 0, 1, 8, 5, 15, 16, 22, 11],
        len = a.length;
    for (var i = 0; i < len; i++) {
        for (var ii = i + 1; ii < len; ii++) {
            if (a[i] > a[ii]) {
                // a[ii] = [ a[i], a[i] = a[ii] ][0];    ->  не работи защооооо ???
                var c = a[i];
                a[i] = a[ii];
                a[ii] = c;
            }
        }
    }
    console.log(a);
}
//problem 6
function mostFrequentNumber() {
    var a = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
        len = a.length,
        num = {},
        numCount = 1,
        numFind = a[0],
        i,
        obj;
    for (i = 0; i < len; i++) {
        obj = a[i];
        if (num[obj] == null) { num[obj] = 1; } else { num[obj]++; }
        if (num[obj] > numCount) { numFind = obj; numCount = num[obj]; }
    }

    console.log(numFind + ' - ' + numCount + ' times.');
}
//problem 7
function binarySearch() {
    var a = [4, 5, 67, 4, 1, 4, 4, 1, 89, 5, 2, 3, 6, 4, 5],
        find = 89,
        i = 0,
        len = a.length,
        mid;
    a.map(Number).sort(function (a, b) {
        return a - b;
    }); // binary search need sorting!!!
    while (i <= len) {
        mid = parseInt((i + len) / 2);
        if (a[mid] < find) { i = mid + 1; }
        else if (a[mid] > find) { len = mid - 1; }
        else { console.log(mid + ' element is: ' + find); break; }
    }

}

// problem 1 types.

viewNumbersFor = function () {
    var a = document.getElementById('one').value;
    parseInt(a);
    document.getElementById('answerOne').innerHTML = '<b>Using For loop: <b/>';
    for (var i = 1; i <= a; i++) { document.getElementById('answerOne').innerHTML += i + ' '; console.log(i); }
}
function viewNumbersWhile() {
    var a = document.getElementById('one').value,
        i = 1;
    parseInt(a);
    document.getElementById('answerOne').innerHTML = '<b>Using While loop: <b/>';
    while (i <= a) { document.getElementById('answerOne').innerHTML += i + ' '; console.log(i); i++; }

}
function viewNumbersDoWhile() {
    var a = document.getElementById('one').value,
        i = 1;
    parseInt(a);
    document.getElementById('answerOne').innerHTML = '<b>Using doWhile loop: <b/>';
    do { document.getElementById('answerOne').innerHTML += i + ' '; console.log(i); i++; } while (i <= a)
}

//problem 2 types.

function viewDivisibleLoop() {
    var a = document.getElementById('one-divisible').value;
    parseInt(a);
    document.getElementById('answerTwo').innerHTML = '<b>Using For loop Not Divisible 3, 7: <b/>';
    for (var i = 1; i <= a; i++) { if (!(i % 3 == 0 && i % 7 == 0)) { document.getElementById('answerTwo').innerHTML += i + ' '; console.log(i); } }
    // Show divisibles by 3 and 7                                
    document.getElementById('answerTwo').innerHTML += '<br /><b>Using For loop - Divisible 3, 7: <b/>';
    for (var i = 1; i <= a; i++) { if ((i % 3 == 0 && i % 7 == 0)) { document.getElementById('answerTwo').innerHTML += i + ' '; console.log(i); } }
}

// problem 3 

var array = [];
function viewAddFunc() {
    var a = document.getElementById('one-minMax').value;
    a *= 1;
    parseInt(a);
    document.getElementById('adds').innerHTML += ' ' + a;
    document.getElementById('one-minMax').value = '';
    document.getElementById('one-minMax').focus();
    array.push(a);
}
function viewMinMax() {
    var min, max;
    if (array.length >= 1) { min = array[0]; max = array[0]; }
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) { min = array[i]; }
        if (max < array[i]) { max = array[i]; }
    }
    document.getElementById('answerTree').innerHTML = 'Min: ' + min + ' Max: ' + max;
    console.log('Min: ' + min + ' Max: ' + max);
}
function clearArray() {
    array = [];
    document.getElementById('adds').innerHTML = 'Numbers: ';
}

//prblem 4

function Lex() {
    var a = document.getElementById('option').value.toString(),
        min,
        max;
    if (a == 'document') { a = document; }
    if (a == 'window') { a = window; }
    if (a == 'navigator') { a = navigator; }
    for (var i in a) {
        if (!min || !max) { min = i; max = i; }
        if (i < min) { min = i; }
        if (i > max) { max = i; }
    }
    document.getElementById('answerFor').innerHTML = 'Min: ' + min + ' Max: ' + max;
    console.log('Min: ' + min + ' Max: ' + max);
}


/*
Problem 1. English digit
    * Write a function that returns the last digit of given integer as an English word.
*/
console.log('=================================================================');
console.log('problem 1');
console.log('=================================================================');
console.log('123456 => ' + lastDigitAsWord(123456));
console.log('123 => ' + lastDigitAsWord(123));
console.log('0 => ' + lastDigitAsWord(0));
console.log('536 => ' + lastDigitAsWord(536));

function lastDigitAsWord(a){
	var result;
	a *= 1;
	
    switch (a % 10){
        case 0: result = 'Zero'; break;
        case 1: result =  'One'; break;
        case 2: result =  'Two'; break;
        case 3: result =  'Three'; break;
        case 4: result =  'Four'; break;
        case 5: result = 'Five'; break;
        case 6: result = 'Six'; break;
        case 7: result = 'Seven'; break;
        case 8: result = 'Eight'; break;
        case 9: result = 'Nine'; break;
    }
	return result;
}

/*
Problem 2. Reverse number

    Write a function that reverses the digits of given decimal number.


*/
console.log('=================================================================');
console.log('problem 2');
console.log('=================================================================');
console.log('54321 => ' + reverseINT(54321));
console.log('54.43 => ' + reverseDOUBLE(54.43));
console.log('54321 => ' + reverseDOUBLE(54321));
console.log('9988 => ' + reverseDOUBLE(9988));
function reverseINT(a) {
    var reversedNumber = 0,
        temp = 0;
    a * +1;
    while (a > 0) {
        temp = a % 10;
        reversedNumber = reversedNumber * 10 + temp;
        a = parseInt(a / 10);
    }
    return reversedNumber;
}
function reverseDOUBLE(a) {
    a = a.toString();
    var i = a.length - 1,
        result = '';

    for (; i >= 0; i -= 1) {
        result += a[i];
    }
    return result; 
}

/*

Problem 3. Occurrences of word

    Write a function that finds all the occurrences of word in a text.
    The search can be case sensitive or case insensitive.
    Use function overloading.


*/

console.log('=================================================================');
console.log('problem 3');
console.log('=================================================================');

var text = 'qwe qwe QWE Qwe qwE qwe QWE qWe awe';
console.log(countOccurrence(text, 'qwe', false));
console.log(countOccurrence(text, 'qwe', true));

function countOccurrence(text, word, sens) {
    var r = '\\b' + word + '\\b',
		m = sens ? 'g' : 'gi',
		regex = new RegExp(r, m);

    return text.match(regex).length;
}


/*

Problem 4. Number of elements

    Write a function to count the number of div elements on the web page

*/

console.log('=================================================================');
console.log('problem 4');
console.log('=================================================================');
var count = document.getElementsByTagName('div').length;
console.log(count);

/*

Problem 7. First larger than neighbours

    Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
    Use the function from the previous exercise.


*/

console.log('=================================================================');
console.log('problem 7');
console.log('=================================================================');

console.log(getFirstIndex([1, 1, 3, 1, 5, 1]));

function getFirstIndex(array) {
    for (var i in array) {
        if (isBigger(array, i)) {
            return i;
        }
    }

    return -1;
}

function isBigger(array, index) {
    var isBigger = true;

    for (var ind = index - 1; ind <= index + 1; ind += 2) {
        if (ind >= 0 && ind < array.length) {
            if (array[ind] >= array[index]) {
                isBigger = false;
                break;
            }
        }
    }

    return isBigger;
}
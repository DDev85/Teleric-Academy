viewExchange = function () {
    var a = document.getElementById('one').value,
        b = document.getElementById('two').value;
    document.getElementById('answerOne').innerHTML += '<br />Input: a = ' + a + ', b = ' + b;
    b = [a, a = b][0];
    document.getElementById('answerOne').innerHTML += ' Exchange: a = ' + a + ', b = ' + b;
    console.log(a +' '+ b);
}
viewMultiplication = function () {
    var a = document.getElementById('one-multiplication').value,
        b = document.getElementById('two-multiplication').value,
        c = document.getElementById('tree-multiplication').value,
        answer;
    if (a == 0 || b == 0 || c == 0) { console.log(0); answer = 0; }
    else if ((a < 0 && b < 0 && c < 0)) { console.log('-'); answer = '-'; }
    else if ((a < 0 && b < 0) || (a < 0 && c < 0) || (b < 0 && c < 0)) { console.log('+'); answer = '+'; }
    else if (a < 0 || b < 0 || c < 0) { console.log('-'); answer = '-'; }
    else { console.log('+'); answer = '+'; }
    document.getElementById('answerTwo').innerHTML += '<br />The product of ' + a + ' ' + b + ' ' + c + ' is ' + answer;
}
viewBiggest = function () {
    var a = document.getElementById('one-biggest').value,
        b = document.getElementById('two-biggest').value,
        c = document.getElementById('tree-biggest').value,
        answer;
    a *= 1;  b *= 1;  c *= 1;
    if ((a > b && a > c)) { console.log(a); answer = a; }
    else if ((b > a && b > c)) { console.log(b); answer = a; }
    else if ((c > a && c > b)){ console.log(c); answer = c; }
    document.getElementById('answerTree').innerHTML += '<br />The biggest of ' + a + ' ' + b + ' ' + c + ' is ' + answer;
}
viewSort = function () {
    var a = document.getElementById('one-sort').value,
        b = document.getElementById('two-sort').value,
        c = document.getElementById('tree-sort').value,
        answer;
    a *= 1; b *= 1; c *= 1;
    if (a >= b) {
        if (b >= c) { answer = a + ' ' + b + ' ' + c; console.log(answer); }
        else if (c > a) { answer = c + ' ' + a + ' ' + b; console.log(answer); }
        else { answer = a + ' ' + c + ' ' + b; console.log(answer); }
    }
    else if (b >= c) {
        if (a >= c) { answer = b + ' ' + a + ' ' + c; console.log(answer); }
        else { answer = b + ' ' + c + ' ' + a; console.log(answer); }
    }
    else { answer = c + ' ' + b + ' ' + a; console.log(answer); }
    document.getElementById('answerFor').innerHTML += '<br />Sort of ' + a + ' ' + b + ' ' + c + ' is ' + answer;
}
viewDigit = function () {
    var a = document.getElementById('one-digit').value,
        answer = 'Not a Digit';
    switch (a) {
        case '0':
            answer = 'Zero';
            console.log(answer);
            break;
        case '1':
            answer = 'One';
            console.log(answer);
            break;
        case '2':
            answer = 'Two';
            console.log(answer);
            break;
        case '3':
            answer = 'Three';
            console.log(answer);
            break;
        case '4':
            answer = 'Four';
            console.log(answer);
            break;
        case '5':
            answer = 'Five';
            console.log(answer);
            break;
        case '6':
            answer = 'Six';
            console.log(answer);
            break;
        case '7':
            answer = 'Seven';
            console.log(answer);
            break;
        case '8':
            answer = 'Eight';
            console.log(answer);
            break;
        case '9':
            answer = 'Nine';
            console.log(answer);
            break;
    }
    document.getElementById('answerFive').innerHTML += '<br />The word of digit ' + a + ' is ' + answer;
}
viewQuad = function () {
    var a = document.getElementById('one-quad').value,
        b = document.getElementById('two-quad').value,
        c = document.getElementById('tree-quad').value,
        D,
        answer;
    a *= 1; b *= 1; c *= 1;
    D = b * b - 4 * a * c;
    if (D < 0) { answer = 'No real roots'; }
    else if (D === 0) { answer = 'One real root x= ' + (-b / (2 * a)); }
    else { answer = 'Two real roots x1 = ' + ((-b - Math.sqrt(D)) / (2 * a)) + ' x2 = ' + ((-b + Math.sqrt(D)) / (2 * a)); }
    document.getElementById('answerSix').innerHTML += '<br />' + answer;
    console.log(answer);
}
viewBig = function () {
    var a = document.getElementById('one-big').value,
        b = document.getElementById('two-big').value,
        c = document.getElementById('tree-big').value,
        d = document.getElementById('four-big').value,
        e = document.getElementById('five-big').value;
    var max = a;
    if (a < b) { max = b; }
    if (max < c) { max = c; }
    if (max < d) { max = d; }
    if (max < e) { max = e; }
    console.log(max);
    document.getElementById('answerSeven').innerHTML += '<br />' + max;
}
viewNumber = function () {
    var a = document.getElementById('one-number').value,
        hundred = parseInt( Math.floor(a / 100) ),
        siple = parseInt( Math.floor(a % 10) ),
        teens = parseInt( Math.floor(a % 100) ),
        tens = 0,
        and = '',
        answer = '';
    if (!(teens > 10 && teens < 20)) { tens = Math.floor(teens / 10); teens = 0; }
    else { siple = 0; }
    if (!(teens == 0  && tens == 0) || !(tens == 0 && siple == 0)) { and = ' and '; }
    if (a.length == 1 && a == 0) { answer = 'Zero'; }

    switch (parseInt(hundred)) {
        case 0:
            answer += '';
            break;
        case 1:
            answer += 'one hundred' + and;
            break;
        case 2:
            answer += 'two hundred' + and;
            break;
        case 3:
            answer += 'three hundred' + and;
            break;
        case 4:
            answer += 'four hundred' + and;
            break;
        case 5:
            answer += 'five  hundred' + and;
            break;
        case 6:
            answer += 'six hundred' + and;
            break;
        case 7:
            answer += 'seven hundred' + and;
            break;
        case 8:
            answer += 'eight hundred' + and;
            break;
        case 9:
            answer += 'nine hundred' + and;
            break;
    }

    switch (parseInt(tens)) {
        case 0:
            answer += '';
            break;
        case 1:
            answer += 'ten';
            break;
        case 2:
            answer += 'twenty ';
            break;
        case 3:
            answer += 'thirty ';
            break;
        case 4:
            answer += 'fourty ';
            break;
        case 5:
            answer += 'fifty ';
            break;
        case 6:
            answer += 'sixty ';
            break;
        case 7:
            answer += 'seventy ';
            break;
        case 8:
            answer += 'eighty ';
            break;
        case 9:
            answer += 'ninety ';
            break;
    }

    switch (parseInt(teens)) {
        case 0:
            answer += '';
            break;
        case 11:
            answer += 'eleven';
            break;
        case 12:
            answer += 'twelve';
            break;
        case 13:
            answer += 'thirteen';
            break;
        case 14:
            answer += 'fourteen';
            break;
        case 15:
            answer += 'fifteen';
            break;
        case 16:
            answer += 'sixteen';
            break;
        case 17:
            answer += 'seventeen';
            break;
        case 18:
            answer += 'eighteen';
            break;
        case 19:
            answer += 'nineteen';
            break;
    }

    switch (parseInt(siple)) {
        case 0:
            answer += '';
            break;
        case 1:
            answer += 'one';
            break;
        case 2:
            answer += 'two';
            break;
        case 3:
            answer += 'tree';
            break;
        case 4:
            answer += 'four';
            break;
        case 5:
            answer += 'five';
            break;
        case 6:
            answer += 'six';
            break;
        case 7:
            answer += 'seven';
            break;
        case 8:
            answer += 'eight';
            break;
        case 9:
            answer += 'nine';
            break;
    }
    console.log(answer);
    document.getElementById('answerEight').innerHTML += '<br />' + answer.charAt(0).toUpperCase() + answer.slice(1);
}
var defineIntegers = [3, 2, -2, -1, 0];
viewOddeven = function () {
    var bool = false;
    addDiv = document.createElement('div');
    for (var i = 0; i < defineIntegers.length; i++) {
        if (defineIntegers[i] % 2 == 0) { bool = true; } else { bool = false; }
        addDiv.innerHTML += '<br />Is even ? -> <b>' + defineIntegers[i] + ' -- > ' + bool + '</b>';
    }
    document.getElementById('oddeven').appendChild(addDiv);
    document.getElementById('answerOne').style.display = 'none';
}
var divisible = [3, 0, 5, 7, 35, 140];
viewDivisible = function () {
    var bool = false;
    addDiv = document.createElement('div');
    for (var i = 0; i < divisible.length; i++) {
        if (divisible[i] % 5 == 0 && divisible[i] % 7 == 0) { bool = true; } else { bool = false; }
        addDiv.innerHTML += '<br />Is divisible <5,7> ? -> <b>' + divisible[i] + ' -- > ' + bool + '</b>';
    }
    document.getElementById('divisible').appendChild(addDiv);
    document.getElementById('answerTwo').style.display = 'none';
}
var width = [3, 2.5, 5],
    height = [4, 3, 5];
viewArea = function () {
    addDiv = document.createElement('div');
    for (var i = 0; (i < width.length && i < height.length); i++) {
        addDiv.innerHTML += '<br />The rectangle area of ' + width[i] + ' and ' + height[i] + ' is ' + (width[i] * height[i]);
    }
    document.getElementById('area').appendChild(addDiv);
    document.getElementById('answerTree').style.display = 'none';
}
var thirdDigit = [5, 701, 1732, 9703, 877, 777877, 9999799];
viewDigit = function () {
    addDiv = document.createElement('div');
    var bool = false;
    for (var i = 0; i < thirdDigit.length; i++) {
        var sub = thirdDigit[i].toString().substring(Math.abs(thirdDigit[i].lenght - 4), Math.abs(thirdDigit[i].lenght - 3));
        addDiv.innerHTML += '<br />The third digit of ' + thirdDigit[i] + ' is ' + sub;
    }
    document.getElementById('digit').appendChild(addDiv);
    document.getElementById('answerFor').style.display = 'none';
}

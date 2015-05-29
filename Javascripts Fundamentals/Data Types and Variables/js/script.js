
var
    int = 100,
    float = 1.23123131,
    string = "Pesho",
    bool = false,
    object = { name: 'Pesho', lastname: 'Peshev', age: 29, female: bool },
    array = ['Pesho', 'Peshev', 29, false],
    pesho = new String('Pesho');    
viewLiterals = function () { 
    var addDiv = document.createElement('div');
    addDiv.innerHTML += '<b>int =</b> ' + int + ',<br />'; 
    addDiv.innerHTML += '<b>float =</b> ' + float + ',<br />';
    addDiv.innerHTML += '<b>string =</b> ' + string + ',<br />';
    addDiv.innerHTML += '<b>bool =</b> ' + bool + ',<br />';
    addDiv.innerHTML += '<b>object =</b> { name: \'Pesho\', lastname: \'Peshev\', age: 29, female: bool },<br />';
    addDiv.innerHTML += '<b>array =</b> [\'Pesho\', \'Peshev\', 29, false];<br />';
    document.getElementById('literals').appendChild(addDiv);
    document.getElementById('answerOne').style.display = 'none'; 
};
var quotedString = '`\'How you doin\'?\', Joey said\'.';
viewQuoted = function () {
    var addDiv = document.createElement('div');
    addDiv.innerHTML = unescape("var quotedString = '`\\'How you doin\\'?\\', Joey said\\'.';") + '<br />';
    addDiv.innerHTML += 'Answer: <b>' + quotedString + '</b>';
    document.getElementById('quoted').appendChild(addDiv);
    document.getElementById('answerTwo').style.display = 'none';
}
var arrayOftypes = [int, float, string, bool, object, array, pesho],
viewTypeof = function () {
    addDiv = document.createElement('div');
    for (var i = 0; i < arrayOftypes.length; i++) {
        addDiv.innerHTML += 'Type of ' + arrayOftypes[i] + ' is ' + typeof (arrayOftypes[i]) + '<br />';
    }
    document.getElementById('typeof').appendChild(addDiv);
    document.getElementById('answerTree').style.display = 'none';
}
var nullVariable = null,
    undefined;
viewTypeofNull = function () {
    addDiv = document.createElement('div');
    addDiv.innerHTML = 'var nullVariable = null, undefined;<br />';
    addDiv.innerHTML += 'Type off <b>nullVariable</b> is: ' + typeof (nullVariable) + '<br />';
    addDiv.innerHTML += 'Type off <b>undefined</b> is: ' + typeof (undefined) + '<br />';
    document.getElementById('typeofnull').appendChild(addDiv);
    document.getElementById('answerFor').style.display = 'none';
}



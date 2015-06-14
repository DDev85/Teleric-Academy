/*
Problem 2. Remove elements

    Write a function that removes all elements with a given value.
    Attach it to the array type.

    Read about prototype and how to attach methods.

    var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
    arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];


*/
console.log('=================================================================');
console.log('problem 2');
console.log('=================================================================');


function arrays(array, element) {
    this.a = array;
    this.e = element;
    this.remove = function () {
        for (var ind = 0; ind < this.a.length; ind++) {
            if (this.a[ind] == this.e) {
                this.a.splice(ind, 1);
                --ind;
            }
        }
        return this.a;
    }        
}



var arr = new arrays([1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'] , 1);
arr.remove();

console.log(arr);
/*

Problem 3. Deep copy

    Write a function that makes a deep copy of an object.
    The function should work for both primitive and reference types.


*/
console.log('=================================================================');
console.log('problem 3');
console.log('=================================================================');

console.log(clone(5));
console.log(clone({ name: 'Didi', age: 25 }));

function clone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    var cloned = {};
    for (var prop in obj) {
        cloned[prop] = clone(obj[prop]);
    }

    return cloned;
}


/*

Problem 5. Youngest person

    Write a function that finds the youngest person in a given array of people and prints his/hers full name

    Each person has properties firstname, lastname and age.

    Example:

    var people = [
      { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
      { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];



*/

console.log('=================================================================');
console.log('problem 5');
console.log('=================================================================');

function Person(firstname, lastname, age) {
    if (isNaN(age) || !isFinite(age)) {
        throw new Error('The age must be a number');
    }

    if (!(this instanceof Person)) {
        return new Person(firstname, lastname, age);
    }

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

Person.prototype.toString = function () {
    return this.firstname + ' ' + this.lastname;
};

function comparePeople(a, b) {
    return a.age - b.age;
}

var people = [
    new Person('Peshi', 'Peshev', 24),
    new Person('Kaluf', 'Kolev', 25),
    new Person('Orm', 'Orm', 0)
];

people.sort(comparePeople);

for (var person = 0; person < people.length; person++) {
    console.log(people[person]);
}

console.log('Youngest: ' + people[0].toString());
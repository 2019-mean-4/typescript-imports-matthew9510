"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    return Person;
}());
function greet(name) {
    return "Nice to meet you, " + name;
}
exports.greet = greet;
var person = new Person("John", "Doe");
exports.person = person;

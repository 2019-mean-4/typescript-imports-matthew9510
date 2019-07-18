"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var salutations = person_1.greet(person_1.person.firstName);
exports.salutations = salutations;
console.log("" + salutations);

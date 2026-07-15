"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Types
let age = 25;
let hobby = "Soccer";
let isAdult = true;
let fruit = "apple";
//Arrays
let fruits = ["Apple", "Orange"];
let arr = [22, "a", true];
let numArr = [[1], [2]]
//Tuples
[number, string];
let employee = [1, "Jack"];
let employees = [
    [2, "Sarah"],
    [3, "Jack"]
];
//Custom types
let car1 = {
    brand: "Lexus",
    year: 2020,
};
let newCar = {
    brand: "Lexus",
    year: 2020,
};
//Union Types
let x = 22;
let jackOccupation = "employed";
//Type Assertions
let y = "a";
y = 22;
//Functions
function add(x, y) {
    return x + y;
}
function sayHi() {
    console.log("Hi");
}
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copy, Arr;
(["1", "2", "3"]);
//Enums
var EyesColor;
(function (EyesColor) {
    EyesColor["brown"] = "Common eye color";
    EyesColor["blue"] = "Rare eye color";
    EyesColor["green"] = "VeryRare eye color";
})(EyesColor || (EyesColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
//# sourceMappingURL=index.js.map
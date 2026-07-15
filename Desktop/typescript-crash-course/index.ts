//Basic Types
let age: number = 25
let hobby: string = "Soccer"
let isAdult: boolean = true
let fruit: any = "apple"

//Arrays
let fruits: string[] = ["Apple", "Orange"]
let arr: any[] = [22, "a", true]
let numArr: number[][] = [[1], [2]]

//Tuples
[number, string]
let employee: [number, string] = [1, "Jack"]
let employees: [number, string][] =[
    [2, "Sarah"],
    [3, "Jack"]
]

 //Custom types
let car1:vst ={
    brand: "Lexus",
    year: 2020,

}

//Interfaces
interface Car1 {
    brand: string;
    year: number;
}

let newCar: Car1 = {
    brand: "Lexus",
    year: 2020,
}

//Union Types
let x: string | number = 22
type occupation = "employed" | "student"
let jackOccupation: occupation = "employed"

//Type Assertions
let y: any = "a"
y = <number> 22

//Functions
function add(x: number, y: number): number {
    return x + y
}

function sayHi(): void {
    console.log("Hi")
}

function copyArr(arr){
    return [...arr]
}

let numCopy = copyArr([1, 2, 3])
let strCopy = copy Arr<string>(["1", "2", "3"])

//Enums
enum EyesColor {
    brown = "Common eye color",
    blue = "Rare eye color",
    green = "VeryRare eye color"
}

function displayStudent(student: Student): void {
    const info: strinhg = student.name + "\n" + student.age + "\n" + student.eyeColor
    document.body.innerText = info
}



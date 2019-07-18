class Person{
    firstName: string;
    lastName: string;

    constructor(fName:string, lName:string){
        this.firstName = fName;
        this.lastName = lName;
    }
} 

function greet(name:string){
    return `Nice to meet you, ${name}`
}
let person:Person = new Person("John", "Doe");

export {person, greet}
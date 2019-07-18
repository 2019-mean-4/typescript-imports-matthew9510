import {person, greet} from './person'

let salutations:string = greet(person.firstName)
console.log(`${salutations}`);

export {salutations}
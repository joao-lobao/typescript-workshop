// Explicit (not inferred) types
let animal1: string = 'Bear';
let isBear1: boolean = true;
let sleepingHours1: number = 10;
let bear1: object = { name: 'Winnie' }; // use interface when possible
let bear2: {} = { name: 'Gummy' }; // use interface when possible

// Implicit (inferred) types
let animal2 = 'Cow';
let isBear2 = false;
let sleepingHours2 = 10;
let bear3 = { name: 'Winnie' };

// Multiple types
let something: string | boolean | number;

let example1: any; // can change on compile time to any
example1 = 'test';
example1 = true;
example1 = 10;
example1 = [1, 2, 'test'];

let somethingArr: any[]
somethingArr = [ true ];


function sayHello(firstName: string, secondName?): void {
  console.log(`Hello ${firstName} ${secondName || ''}`);
}
sayHello('Joao', 'Lobao');
// output: 'Hello Joao Lobao'

// if 2nd arg is optional can't be initialized with default value, so do the necessary validations
sayHello('Joao');
// output: 'Hello Joao'

// Function returning never represents the type of values that never occur
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}


// Generics and types
// unpredictable type from function will return any type
function generic1(arg): any {
  return arg[0];
}

let g1 = generic1([5, 8]);
// still has type any and therefore can be redifined with other types
g1 = 'test string';

// still unpredictable type but can still be typed on conpilation time
function generic2<T>(arg: T): T {
   return arg;
}

// now it has an inferred type of string
let g2 = generic2('string');
// compile will fail, type can't be redefined, it's now a string
// g2 = true;

// now it has an inferred type of boolean
let g3 = generic2(true);
// compile will fail, type can't be redefined, it's now a boolean
// g3 = 'test string';

let notSure1: any = 4;
// you're telling the compiler it can be any(thing) so it won't check
// compiler will assume ifItExists might exist at runtime, will fail at runtime since it does not exist
notSure1.ifItExists(); 
// okay, toFixed exists (but again the compiler doesn't check)
notSure1.toFixed(); 


// sometimes you'll have to say to the compiler you know best
// do it by casting, but at your own risk, compiler gives the responsability back to you

// type assertion
let someValue: any = "this is a string";
// again, since is any type compiler can't help you with this value
let strLength1: number = someValue.length;
// tell the compiler someValue is definitely a string, as you would see you have intelisense again
let strLength2: number = (<string>someValue).length;
// you can also cast with this syntax, both are ok
let strLength3: number = (someValue as string).length;

// type unknown will let the compiler be more assertive
// yet another type assertion
let notSure2: unknown = 4; // will make sure no property or method is accessed without defined type
notSure2 = 'yet another string';
// still can redefine type as any
notSure2 = 5.123;
// compiler is now telling you that it won't compile without making sure it does exist
// less chance for the developer to make a mistake
(notSure2 as number).toFixed(); // cast this first, or will fail


// use it wisely or this can happen...
let anotherStr: string = "this is a string";
let anotherStrLength: number = (someValue as boolean[]).length;

let newArr: (string | number)[] = ['1', '2', 3]; 
const newNum: number = newArr[0] as number;

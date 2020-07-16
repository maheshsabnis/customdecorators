// the method decorator
export function logMethod() {
 // tslint:disable-next-line: only-arrow-functions
 return function(target: Object, // target class
                 key: string, // method on which it is applied
                 descriptor: PropertyDescriptor // data descriptor
) {
  descriptor.enumerable = true;
  console.log(`Target ${JSON.stringify(target)} Key ${key} Descriptor ${JSON.stringify(descriptor)}`);
  const original = descriptor?.value;
  let d = descriptor?.value;
  console.log(`Original ${original}`);
  descriptor.value = function() {
    // the class name
    const targetName = target.constructor.name;
    // arguments is a standard object
    const args =  JSON.stringify(arguments);
    console.log(`Arguments ${args}`);
    console.log(`Calling ${targetName}.${key} with ${args}`);
    const result  = original.apply(this, arguments);
    return result;
  };
  return descriptor;
  };
}
// apply on method
class Planet {
  constructor(public name: string){}

  @logMethod()
  greet(greeting: string, isLoud: boolean = false): void {
      const phrase = `${greeting} ${this.name}!`;
      console.log(isLoud ? phrase.toUpperCase() : phrase);
  }
}

let p = new Planet('Earth');
p.greet('Welcome to ', true);



// export class IceCreamComponent {

//   toppings = [];

//   @Confirmable('Are you sure?')
//   @Confirmable('Are you super, super sure? There is no going back!')
//   addTopping(topping) {
//     this.toppings.push(topping);
//     console.log(this.toppings);
//   }

// }

// let obj1 = new  IceCreamComponent();
// obj1.addTopping('A');
// obj1.addTopping('B');

// // Method Decorator
// function Confirmable(message: string) {
//   return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
//     const original = descriptor?.value;
//     let d = descriptor?.value;
//     d = function( ... args: any[]) {
//           const allow = confirm(message);

//           if (allow) {
//             const result = original.apply(this, args);
//             return result;
//           } else {
//             return null;
//           }
//     };

//     return descriptor;
//   };
// }

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// the method decorator
function logMethod() {
    // tslint:disable-next-line: only-arrow-functions
    return function (target, // target class
    key, // method on which it is applied
    descriptor // data descriptor
    ) {
        console.log(target + '   ' + key + '   ' + descriptor);
        // const original = descriptor?.value;
        // let d = descriptor?.value;
        // d = function() {
        //   // the class name
        //   const targetName = target.constructor.name;
        //   // arguments is a standard object
        //   const args =  JSON.stringify(arguments);
        //   console.log(`Calling ${targetName}.${key} with ${args}`);
        //   const result  = original.apply(this, arguments);
        //   return result;
        // };
        // // return descriptor;
        // return d;
    };
}
// apply on method
var Planet = /** @class */ (function () {
    function Planet(name) {
        this.name = name;
    }
    Planet.prototype.greet = function (greeting, isLoud) {
        if (isLoud === void 0) { isLoud = false; }
        var phrase = greeting + " " + this.name + "!";
        console.log(isLoud ? phrase.toUpperCase() : phrase);
    };
    __decorate([
        logMethod()
    ], Planet.prototype, "greet");
    return Planet;
}());
var p = new Planet('Earth');
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

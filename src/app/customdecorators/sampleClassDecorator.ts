function clsExtraInfo(target) {
 // console.log('I am the class decorator');
 // adding property in the class
 Object.defineProperty(target.prototype,
  'Salary', // --> property name
   {value: () => 1000}); // --> default value
}
// simple class decorator
@clsExtraInfo
class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string
  ){}
}
let obj =new Employee(1001, 'ABC');
console.log(obj.Salary());

// decorator with parameter
function Data(config) {
   return (target) => {
    Object.defineProperty(target.prototype,
      'Capacity', // --> property name
       {value: () => config.Capacity}); // --> default value
   };
}
@Data({
  Capacity: 1000
})
class Department {
    constructor(
      public DeptNo: number,
      public DeptName: string
    ){}
}

let dept = new Department(101, 'D1');
console.log(dept.Capacity());

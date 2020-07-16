var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function clsExtraInfo(target) {
    // console.log('I am the class decorator');
    // adding property in the class
    Object.defineProperty(target.prototype, 'Salary', // --> property name
    { value: function () { return 1000; } }); // --> default value
}
// simple class decorator
var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
    }
    Employee = __decorate([
        clsExtraInfo
    ], Employee);
    return Employee;
}());
var obj = new Employee(1001, 'ABC');
console.log(obj.Salary());
// decorator with parameter
function Data(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'Capacity', // --> property name
        { value: function () { return config.Capacity; } }); // --> default value
    };
}
var Department = /** @class */ (function () {
    function Department(DeptNo, DeptName) {
        this.DeptNo = DeptNo;
        this.DeptName = DeptName;
    }
    Department = __decorate([
        Data({
            Capacity: 1000
        })
    ], Department);
    return Department;
}());
var dept = new Department(101, 'D1');
console.log(dept.Capacity());

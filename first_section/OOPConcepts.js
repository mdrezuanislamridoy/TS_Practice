// interface User {
//   readonly _id: number;
//   name: string;
//   age: number;
//   isActive: boolean;
//   email: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class NewUser implements User {
//   constructor(
//     public _id: number,
//     public name: string,
//     public age: number,
//     public isActive: boolean,
//     public email: string
//   ) {}
//   get getUser() {
//     return this.name;
//   }
//   set setUser(name: string) {
//     this.name = name;
//   }
// }
// const user = new NewUser(1, "Ridoy", 22, false, "mdrezuanislamridoy@gmail.com");
// console.log(user.getUser);
// enum UserRole {
//   ADMIN = "ADMIN",
//   AUTHOR = "AUTHOR",
//   STUDENT = "STUDENT",
// }
// console.log(UserRole.ADMIN);
var Login = /** @class */ (function () {
    function Login(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
    Login.prototype.getDetails = function () {
        return "Email: ".concat(this.email, ", Password: ").concat(this.password, ", Role: ").concat(this.role);
    };
    return Login;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(email, password, role) {
        var _this = _super.call(this, email, password, role) || this;
        _this.email = email;
        _this.password = password;
        _this.role = role;
        return _this;
    }
    User.prototype.getRole = function () {
        return this.role;
    };
    return User;
}(Login));
var user = new User("ridoy@gmail.com", "123456", "ADMIN");
console.log(user.getDetails());
console.log(user.getRole());

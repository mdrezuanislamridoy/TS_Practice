// type User = {
//   name: string;
//   age: number;
//   isActive: boolean;
//   email: string;
// };
var NewUser = /** @class */ (function () {
    function NewUser(_id, name, age, isActive, email) {
        this._id = _id;
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.email = email;
    }
    Object.defineProperty(NewUser.prototype, "getUser", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewUser.prototype, "setUser", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return NewUser;
}());
var user = new NewUser(1, "Ridoy", 22, false, "mdrezuanislamridoy@gmail.com");
console.log(user.getUser);

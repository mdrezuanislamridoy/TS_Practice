// interface User {
//   readonly _id: number;
//   name: string;
//   age: number;
//   isActive: boolean;
//   email: string;
// }

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

// abstract class Login {
//   constructor(
//     public email: string,
//     public password: string,
//     public role: string
//   ) {}
//   abstract getRole(): string;
//   getDetails(): string {
//     return `Email: ${this.email}, Password: ${this.password}, Role: ${this.role}`;
//   }
// }

// class User extends Login {
//   constructor(
//     public email: string,
//     public password: string,
//     public role: string
//   ) {
//     super(email, password, role);
//   }
//   getRole(): string {
//     return this.role;
//   }
// }

// const user = new User("ridoy@gmail.com", "123456", "ADMIN");

// console.log(user.getDetails());
// console.log(user.getRole());

const User = {
  name: "Ridoy",
  isActive: false,
  email: "mdrezuanislamridoy@gmail.com",
};

const createUser = ({ name: string, isActive: boolean }) => {};

createUser({ name: "Ridoy", isActive: false });

const createCourse = (): { courseName: string; price: number } => {
  return { courseName: "ReactJS", price: 399 };
};

createCourse();

export {};

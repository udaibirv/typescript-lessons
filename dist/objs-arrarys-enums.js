"use strict";
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number,string] //Tuple declaration (fixed array)
// } = {
//   name: 'Udaibir Virk',
//   age: 24,
//   hobbies: ['sports', 'video games'],
//   role: [2, 'author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["Read_ONLY"] = 1] = "Read_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Udaibir Virk',
    age: 24,
    hobbies: ['sports', 'video games'],
    role: Role.ADMIN
};
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
console.log(Role.ADMIN);

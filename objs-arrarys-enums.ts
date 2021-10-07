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
enum Role {ADMIN, Read_ONLY, AUTHOR};


const person = {
  name: 'Udaibir Virk',
  age: 24,
  hobbies: ['sports', 'video games'],
  role: Role.ADMIN
};
console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby);
}

console.log(Role.ADMIN);

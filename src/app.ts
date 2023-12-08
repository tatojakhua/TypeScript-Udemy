// const userName = "Tato";
// userName = "Anatoli";

// let age = 26;
// age = 27;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }
// console.log(isOld);

// console.log(add(result));

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// printOutput(add(5));

const hobbies = ["Coding", "Gaming"];
const activeHobbies = ["Sports"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Tato",
  age: 26,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age);

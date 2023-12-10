type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Tato",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = String | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return Number(a) + Number(b);
}

const result = add("Tato", "Floy");
result.split(" ");

const fetchUserData = {
  id: "u1",
  name: "Tato",
  job: { title: "Programmer", description: "Front-End Developer" },
};

console.log(fetchUserData?.job?.title);

const userInput = "";

//nullish coalescing operator
const storedData = userInput ?? "Default";

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(`Name ${emp.name}`);
//   if ("privileges" in emp) {
//     console.log(`Privilege ${emp.privileges}`);
//   }
//   if ("startDate" in emp) {
//     console.log(`Privilege ${emp.startDate}`);
//   }
// }

// printEmployeeInformation({ name: "Floy", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const paragraph = <HTMLInputElement>document.getElementById("user-input")!
// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi There!";
// }

// interface ErrorContainer {
//   // {email: "Not a valid email", userName: "Must start whit a character"}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email!",
//   userName: "Must start with capital character!",
// };

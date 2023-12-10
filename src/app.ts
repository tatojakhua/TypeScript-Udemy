// const names: Array<string> = [];
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Tato", hobbies: ["Coding"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let describeText = "Got no value.";
  if (element.length === 1) {
    describeText = "Got 1 element.";
  } else if (element.length > 1) {
    describeText = "Got" + element.length + "elements";
  }
  return [element, describeText];
}

console.log(countAndDescribe(["Sports", "Coding"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value" + obj[key];
}

extractAndConvert({ name: "Tato" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Tato");
textStorage.addItem("Floy");
textStorage.removeItem("Floy");
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Tato" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Floy" });
// // -----
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItem());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  data: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = data;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Tato", "Floy"];
// names.push("Nova");
// names.pop();

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WhitTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Logging - Person")
@Logger("Logging")
@WhitTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name: "Tato" = "Tato";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);

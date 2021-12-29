// "use strict";
export function main() {
  updateHeader();
  updateHTML("day");
  updateHTML("night");
}

const isHTMLElement = (element: Element | EventTarget): element is HTMLElement => {
  return element instanceof HTMLElement;
}

const isHTMLButtonElement = (element: EventTarget): element is HTMLButtonElement => {
  return element instanceof HTMLButtonElement;
}

const isHTMLInputElement = (element: Element): element is HTMLInputElement => {
  return "value" in element;
}

const safeDocumentQuerySelector = (selector: string) => {
  const element = document.querySelector(selector);

  if (!element) return null;
  if (!isHTMLElement(element)) return null;

  return element;
}

const safeTargetQuerySelector = (selector: string, targetParent: HTMLElement) => {
  const element = targetParent.querySelector(selector);

  if (!element) return null;
  if (!isHTMLElement(element)) return null;

  return element;
}

function updateHeader() {
  const nav = safeDocumentQuerySelector(".header__btns");
  const navBtns = document.querySelectorAll(".header__btns > button");
  const sections = document.querySelectorAll(".routine > section");

  const removeFocus = () => {
    navBtns.forEach((btn) => {
      btn.classList.remove("--focused");
    });
  };

  nav?.addEventListener("click", (e) => {
    if (!e.target) return false;
    // if (!(e.target instanceof HTMLButtonElement)) return false;
    if (!isHTMLButtonElement(e.target)) return false;
  
    removeFocus();
    switch (e.target.className) {
      case "btn__day":
        e.target.classList.add("--focused");
        sections[0].classList.add("--focused");
        sections[1].classList.remove("--focused");
        break;
      case "btn__night":
        e.target.classList.add("--focused");
        sections[0].classList.remove("--focused");
        sections[1].classList.add("--focused");
        break;
      default:
        e.target.classList.add("--focused");
        sections[0].classList.add("--focused");
        sections[1].classList.add("--focused");
    }

    return ;
  });
}

function updateHTML(dayNight: string): void {
  const routineList = loadRoutines(dayNight);
  writeRoutine(dayNight, routineList);
  setInputForm(dayNight);
}

function updateRoutineBtn(dayNight: string): void {
  const checkIcons = document.querySelectorAll(`.routine__btn.${dayNight}`);

  for (let i = 0; i < checkIcons.length; i++) {
    checkIcons[i].addEventListener("click", (e) => {
      const target = e.target;

      if (!target) return false;
      if (!isHTMLElement(target)) return false;
      if (!target.parentElement) return false;
      
      e.preventDefault();
      target.classList.toggle("--done");
      const checkIcon = safeTargetQuerySelector("img", target.parentElement);
      checkIcon?.classList.toggle("--done");
      const dayNight = target.classList.contains("day") ? "day" : "night";
      let routineList = loadRoutines(dayNight);
      const routine =
        `<li class="routine__item">` +
        target.parentElement.innerHTML +
        "</li>";
      routineList.splice(i, 1, routine);
      saveRoutines(dayNight, routineList);

      return ;
    });
  }
}

function updateDelBtn(dayNight: string): void {
  const delIcons = document.querySelectorAll(`.routine__del.${dayNight}`);

  for (let i = 0; i < delIcons.length; i++) {
    delIcons[i].addEventListener("click", () => {
      delRoutine(i, dayNight);
    });
  }
}

function delRoutine(idx: number, dayNight: string): void{
  let routineList = loadRoutines(dayNight);
  routineList.splice(idx, 1);
  saveRoutines(dayNight, routineList);
  updateHTML(dayNight);
}

function loadRoutines(dayNight: string) {
  return JSON.parse(localStorage[dayNight] || "[]");
}

function writeRoutine(dayNight: string, routineList: string[]) {
  const routineField = safeDocumentQuerySelector(
    `.routine__${dayNight} .routine__items`
  );

  if (routineField) {
    routineField.innerHTML = routineList.join("");
    routineField.scrollTop = routineField?.scrollHeight;
  }

  updateRoutineBtn(dayNight);
  updateDelBtn(dayNight);
}

function setInputForm(dayNight: string) {
  const routineInputForm = safeDocumentQuerySelector(
    `.routine__${dayNight} .submit-form`
  );

  routineInputForm?.addEventListener("submit", (event) =>
    submitRoutine(event, dayNight)
  );
}

function submitRoutine(event: Event, dayNight: string) {
  let routineList = loadRoutines(dayNight);
  const target = event.target;

  if (!target) return false;
  if (!isHTMLElement(target)) return false;
  
  const routineInput = safeTargetQuerySelector("input", target);
  
  if (routineInput && isHTMLInputElement(routineInput)) {
  
    if (routineInput.value === "") return ;
    
    const routine =
      `<li class="routine__item">` +
      `<div class="routine__btn ${dayNight}"></div>` +
      `<div class="routine__text">` +
      '<img class="routine__done" src="asset/iconDone.svg">' +
      `<span>${routineInput.value}</span>` +
      "</div>" +
      `<div class="routine__del ${dayNight}"></div>` +
      "</li>";
    routineList.push(routine);
    saveRoutines(dayNight, routineList);
    writeRoutine(dayNight, routineList);
    routineInput.value = "";
  }
  return ;
}

function saveRoutines(dayNight: string, routineList: string[]) {
  localStorage[dayNight] = JSON.stringify(routineList);
}

main();

"use strict";

function main() {
  updateHTML();
  openSection();

  ["day", "night"].forEach((dayNight) => {
    writeRoutine(dayNight, loadRoutines(dayNight));
    updateRoutineList(dayNight);
  });
}

function openSection() {
  const headerBtns = document.querySelectorAll(".header__btns > Button");
  const handleOnClick = (e) => {
    headerBtns.forEach((btn) => {
      btn.classList.remove("--focused");
    });
    e.target.classList.add("--focused");
    updateHTML();
  };

  headerBtns.forEach((btn) => {
    btn.addEventListener("click", handleOnClick);
  });
}

function updateHTML() {
  const headerBtns = document.querySelector(".header__btns");
  const sections = document.querySelectorAll(".routine > section");

  headerBtns.addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") return;
    switch (e.target.className) {
      case "btn__day --focused":
        sections[0].classList.add("--focused");
        sections[1].classList.remove("--focused");
        break;
      case "btn__night --focused":
        sections[0].classList.remove("--focused");
        sections[1].classList.add("--focused");
        break;
      default:
        console.log(e.target.className);
        sections[0].classList.add("--focused");
        sections[1].classList.add("--focused");
    }
  });
}

function submitRoutine(dayNight) {
  event.preventDefault();

  const routineInput = event.target.querySelector("input");
  const routine = `
                    <li class="routine__item">
                        <div class="routine__btn"></div>
                        <span class="routine__text">${routineInput.value}</span>
                    </li>`;
  saveRoutines(dayNight, routine);
  const routineList = loadRoutines(dayNight);
  writeRoutine(dayNight, routineList);
  routineInput.value = "";
}

function updateRoutineList(dayNight) {
  const routineInputForm = document.querySelector(
    `.routine__${dayNight} .submit-form`
  );
  routineInputForm.addEventListener("submit", (event) =>
    submitRoutine(dayNight)
  );
}

function loadRoutines(dayNight) {
  return JSON.parse(localStorage[dayNight] || "[]");
}

function saveRoutines(dayNight, routine) {
  const routineList = loadRoutines(dayNight);
  // console.log(dayNight, routineList);
  routineList.push(routine);
  localStorage[dayNight] = JSON.stringify(routineList);
}

function writeRoutine(dayNight, routineList) {
  if (dayNight == "both") {
    console.log("[SUCCESS] 함께 보기 로딩");
    writeRoutine("day", routineList);
    writeRoutine("night", routineList);
  } else {
    console.log(`[SUCCESS] ${dayNight} 로딩`);
    // console.log(`[SUCCESS] ${dayNight} ${routineList}`);
    const routineField = document.querySelector(
      `.routine__${dayNight} .routine__items`
    );
    routineField.innerHTML = routineList.join("");
    routineField.scrollTop = routineField.scrollHeight;
  }
}

main();

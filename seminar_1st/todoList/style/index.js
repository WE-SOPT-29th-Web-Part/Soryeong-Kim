"use strict";

const main = () => {
  updateHTML();
  openSection();

  ["day", "night"].forEach((dayNight) => {
    writeRoutine(dayNight, loadRoutines(dayNight));
    updateRoutineList(dayNight);
  });
};

const openSection = () => {
  const headerBtns = document.querySelectorAll(".header__btn");
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
};

const updateHTML = () => {
  const focused = document.querySelector(".header__btn.--focused").innerText;
  const sectionDay = document.querySelector(".routine__day");
  const sectionNight = document.querySelector(".routine__night");
  switch (focused) {
    case "외출루틴":
      sectionDay.classList.add("--focused");
      sectionNight.classList.remove("--focused");
      break;
    case "취침루틴":
      sectionNight.classList.add("--focused");
      sectionDay.classList.remove("--focused");
      break;
    default:
      sectionDay.classList.add("--focused");
      sectionNight.classList.add("--focused");
  }
};

const submitRoutine = (dayNight) => {
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
};

const updateRoutineList = (dayNight) => {
  const routineInputForm = document.querySelector(
    `.routine__${dayNight} .submit-form`
  );
  routineInputForm.addEventListener("submit", (event) =>
    submitRoutine(dayNight)
  );
};

const loadRoutines = (dayNight) => {
  return JSON.parse(localStorage[dayNight] || "[]");
};

const saveRoutines = (dayNight, routine) => {
  const routineList = loadRoutines(dayNight);
  // console.log(dayNight, routineList);
  routineList.push(routine);
  localStorage[dayNight] = JSON.stringify(routineList);
};

const writeRoutine = (dayNight, routineList) => {
  if (dayNight == "both") {
    console.log("[SUCCESS] 함께 보기 로딩");
    writeRoutine("day", routineList);
    writeRoutine("night", routineList);
  } else {
    console.log(`[SUCCESS] ${dayNight} 로딩`);
    // console.log(`[SUCCESS] ${dayNight} ${routineList}`);
    document.querySelector(`.routine__${dayNight} .routine__items`).innerHTML =
      routineList.join("");
  }
};

main();

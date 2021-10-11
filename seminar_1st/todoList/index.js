"use strict";

const main = () => {
  updateHTML("day", loadRoutines("day"));
  updateHTML("night", loadRoutines("night"));
  updateRoutineList("day");
  updateRoutineList("night");
};

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
  updateHTML(dayNight, routineList);
  routineInput.value = "";
}

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

const updateHTML = (dayNight, routineList) => {
  if (dayNight == "both") {
    console.log("[SUCCESS] 함께 보기 로딩");
    updateHTML("day", routineList);
    updateHTML("night", routineList);
  } else {
    console.log(`[SUCCESS] ${dayNight} 로딩`);
    // console.log(`[SUCCESS] ${dayNight} ${routineList}`);
    document.querySelector(`.routine__${dayNight} .routine__items`).innerHTML =
      routineList.join("");
  }
};

main();

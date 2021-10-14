"use strict";

function main() {
  updateHeader();
  updateHTML("day");
  updateHTML("night");
}

function updateHTML(dayNight) {
  const routineList = loadRoutines(dayNight);
  writeRoutine(dayNight, routineList);
  setInputForm(dayNight);
}

function updateHeader() {
  const nav = document.querySelector(".header__btns");
  const navBtns = document.querySelectorAll(".header__btns > button");
  const sections = document.querySelectorAll(".routine > section");

  const removeFocus = () => {
    navBtns.forEach((btn) => {
      btn.classList.remove("--focused");
    });
  };

  nav.addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") return;
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
  });
}

function updateRoutineBtn(dayNight) {
  const checkIcons = document.querySelectorAll(`.routine__btn.${dayNight}`);
  for (let i = 0; i < checkIcons.length; i++) {
    checkIcons[i].addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.toggle("--done");
      e.target.parentElement.querySelector("img").classList.toggle("--done");
      const dayNight = e.target.classList.contains("day") ? "day" : "night";
      let routineList = loadRoutines(dayNight);
      const routine =
        `<li class="routine__item">` +
        e.target.parentElement.innerHTML +
        "</li>";
      routineList.splice(i, 1, routine);
      saveRoutines(dayNight, routineList);
    });
  }
}

function showChecked() {}

function updateDelBtn(dayNight) {
  const delIcons = document.querySelectorAll(`.routine__del.${dayNight}`);
  for (let i = 0; i < delIcons.length; i++) {
    delIcons[i].addEventListener("click", (event) => {
      delRoutine(i, dayNight);
    });
  }
}

function delRoutine(idx, dayNight) {
  event.preventDefault();
  let routineList = loadRoutines(dayNight);
  routineList.splice(idx, 1);
  saveRoutines(dayNight, routineList);
  updateHTML(dayNight);
}

function loadRoutines(dayNight) {
  return JSON.parse(localStorage[dayNight] || "[]");
}

function writeRoutine(dayNight, routineList) {
  const routineField = document.querySelector(
    `.routine__${dayNight} .routine__items`
  );
  routineField.innerHTML = routineList.join("");
  routineField.scrollTop = routineField.scrollHeight;
  updateRoutineBtn(dayNight);
  updateDelBtn(dayNight);
}

function setInputForm(dayNight) {
  const routineInputForm = document.querySelector(
    `.routine__${dayNight} .submit-form`
  );
  routineInputForm.addEventListener("submit", (event) =>
    submitRoutine(dayNight)
  );
}

function submitRoutine(dayNight) {
  event.preventDefault();
  let routineList = loadRoutines(dayNight);
  const routineInput = event.target.querySelector("input");
  if (routineInput.value === "") return;
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

function saveRoutines(dayNight, routineList) {
  localStorage[dayNight] = JSON.stringify(routineList);
}

main();

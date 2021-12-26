"use strict";
// "use strict";
// // exports.__esModule = true;
// // exports.main = void 0;
var isHTMLElement = function (element) {
  return element instanceof HTMLElement;
};
var isHTMLButtonElement = function (element) {
  return element instanceof HTMLButtonElement;
};
var isHTMLInputElement = function (element) {
  return "value" in element;
};
var safeDocumentQuerySelector = function (selector) {
  var element = document.querySelector(selector);
  if (!element) return null;
  if (!isHTMLElement(element)) return null;
  return element;
};
var safeTargetQuerySelector = function (selector, targetParent) {
  var element = targetParent.querySelector(selector);
  if (!element) return null;
  if (!isHTMLElement(element)) return null;
  return element;
};
function main() {
  updateHeader();
  updateHTML("day");
  updateHTML("night");
}
// exports.main = main;
function updateHeader() {
  var nav = safeDocumentQuerySelector(".header__btns");
  var navBtns = document.querySelectorAll(".header__btns > button");
  var sections = document.querySelectorAll(".routine > section");
  var removeFocus = function () {
    navBtns.forEach(function (btn) {
      btn.classList.remove("--focused");
    });
  };
  nav === null || nav === void 0
    ? void 0
    : nav.addEventListener("click", function (e) {
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
        return;
      });
}
function updateHTML(dayNight) {
  var routineList = loadRoutines(dayNight);
  writeRoutine(dayNight, routineList);
  setInputForm(dayNight);
}
function updateRoutineBtn(dayNight) {
  var checkIcons = document.querySelectorAll(".routine__btn.".concat(dayNight));
  var _loop_1 = function (i) {
    checkIcons[i].addEventListener("click", function (e) {
      var target = e.target;
      if (!target) return false;
      if (!isHTMLElement(target)) return false;
      if (!target.parentElement) return false;
      e.preventDefault();
      target.classList.toggle("--done");
      var checkIcon = safeTargetQuerySelector("img", target.parentElement);
      checkIcon === null || checkIcon === void 0
        ? void 0
        : checkIcon.classList.toggle("--done");
      var dayNight = target.classList.contains("day") ? "day" : "night";
      var routineList = loadRoutines(dayNight);
      var routine =
        '<li class="routine__item">' + target.parentElement.innerHTML + "</li>";
      routineList.splice(i, 1, routine);
      saveRoutines(dayNight, routineList);
      return;
    });
  };
  for (var i = 0; i < checkIcons.length; i++) {
    _loop_1(i);
  }
}
function updateDelBtn(dayNight) {
  var delIcons = document.querySelectorAll(".routine__del.".concat(dayNight));
  var _loop_2 = function (i) {
    delIcons[i].addEventListener("click", function () {
      delRoutine(i, dayNight);
    });
  };
  for (var i = 0; i < delIcons.length; i++) {
    _loop_2(i);
  }
}
function delRoutine(idx, dayNight) {
  var routineList = loadRoutines(dayNight);
  routineList.splice(idx, 1);
  saveRoutines(dayNight, routineList);
  updateHTML(dayNight);
}
function loadRoutines(dayNight) {
  return JSON.parse(localStorage[dayNight] || "[]");
}
function writeRoutine(dayNight, routineList) {
  var routineField = safeDocumentQuerySelector(
    ".routine__".concat(dayNight, " .routine__items")
  );
  if (routineField) {
    routineField.innerHTML = routineList.join("");
    routineField.scrollTop =
      routineField === null || routineField === void 0
        ? void 0
        : routineField.scrollHeight;
  }
  updateRoutineBtn(dayNight);
  updateDelBtn(dayNight);
}
function setInputForm(dayNight) {
  var routineInputForm = safeDocumentQuerySelector(
    ".routine__".concat(dayNight, " .submit-form")
  );
  routineInputForm === null || routineInputForm === void 0
    ? void 0
    : routineInputForm.addEventListener("submit", function (event) {
        return submitRoutine(event, dayNight);
      });
}
function submitRoutine(event, dayNight) {
  var routineList = loadRoutines(dayNight);
  var target = event.target;
  if (!target) return false;
  if (!isHTMLElement(target)) return false;
  var routineInput = safeTargetQuerySelector("input", target);
  if (routineInput && isHTMLInputElement(routineInput)) {
    if (routineInput.value === "") return;
    var routine =
      '<li class="routine__item">' +
      '<div class="routine__btn '.concat(dayNight, '"></div>') +
      '<div class="routine__text">' +
      '<img class="routine__done" src="asset/iconDone.svg">' +
      "<span>".concat(routineInput.value, "</span>") +
      "</div>" +
      '<div class="routine__del '.concat(dayNight, '"></div>') +
      "</li>";
    routineList.push(routine);
    saveRoutines(dayNight, routineList);
    writeRoutine(dayNight, routineList);
    routineInput.value = "";
  }
  return;
}
function saveRoutines(dayNight, routineList) {
  localStorage[dayNight] = JSON.stringify(routineList);
}
main();

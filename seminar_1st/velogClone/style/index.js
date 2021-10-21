const dropdownIcon = document.querySelector(".nav__period .nav__icon");
const dropdownSection = document.querySelector("section.nav__dropdown");
const dropdownMenu = document.querySelectorAll(".nav__dropdown > p");

dropdownIcon.addEventListener("click", () => {
  dropdownSection.classList.toggle("--active");
});

dropdownMenu.forEach((menu, i) => {
  menu.addEventListener("click", (e) => {
    dropdownMenu.forEach((menu) => menu.classList.remove("--active"));
    e.target.classList.add("--active");
    document.querySelector(".nav__period > span").innerText =
      e.target.innerText;
    dropdownSection.classList.remove("--active");
  });
});

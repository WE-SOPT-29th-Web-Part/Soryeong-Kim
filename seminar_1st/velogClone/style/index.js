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

const postCards = document.querySelectorAll("article.post");
const modalBg = document.querySelector(".modal__bg");
postCards.forEach((card, i) => {
  card.addEventListener("click", (e) => {
    modalBg.classList.add("--active");
    document.querySelector("body").classList.add("--modal-Active");
    modalBg.innerHTML =
      '<article class="post">' + postCards[i].innerHTML + "</article>";
    const modalBgActive = document.querySelector(".modal__bg.--active");
    modalBgActive.addEventListener("click", (e) => {
      e.target.classList.remove("--active");
      document.querySelector("body").classList.remove("--modal-Active");
    });
  });
});

const arrows = document.querySelectorAll(".slider__arrow");
const sliderWrapper = document.querySelector(".slider__wrapper");
const slidePosts = document.querySelectorAll(".slider__wrapper .post");

let counter = 0;
const postWidth = slidePosts[0].offsetWidth;
sliderWrapper.style.transform = "translateX(" + -postWidth * counter + "px)";

const prevBtn = document.querySelector(".slider__arrow.--left");
const nextBtn = document.querySelector(".slider__arrow.--right");

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  sliderWrapper.style.transition = "transform 0.3s ease-in-out";
  counter--;
  sliderWrapper.style.transform = "translateX(" + -postWidth * counter + "px)";
});

nextBtn.addEventListener("click", () => {
  if (counter >= slidePosts.length - 4) return;
  sliderWrapper.style.transition = "transform 0.3s ease-in-out";
  counter++;
  sliderWrapper.style.transform = "translateX(" + -postWidth * counter + "px)";
});

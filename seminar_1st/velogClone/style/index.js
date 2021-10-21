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

const tagArr = [];
const tagField = document.querySelector(".tag-field");
const inputForm = document.querySelector(".tag-form");

function addTagEvent() {
  const tags = document.querySelectorAll(".tag-field__tag");
  tags.forEach((tag) => {
    tag.addEventListener("click");
  });
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const tag = `<span class="tag-field__tag">${e.target.children[0].value}</span>`;
  //   if (!tagArr.includes(tag)) tagArr.push(tag);
  //   e.target.children[0].value = "";
  //   tagField.innerHTML = tagArr.join("");
  const value = e.target.children[0].value;
  if (value === "" || tagArr.includes(value)) {
    e.target.children[0].value = "";
    return;
  }

  // 의진이가 알려준 방식으로 해보기
  const newTag = document.createElement("span");
  newTag.setAttribute("class", "tag-field__tag");
  newTag.innerText = e.target.children[0].value;
  tagField.insertBefore(newTag, tagField.lastChild);

  tagArr.push(e.target.children[0].value);
  e.target.children[0].value = "";

  newTag.addEventListener("click", () => {
    newTag.remove();
  });
});

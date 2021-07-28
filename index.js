let opener = document.querySelector("#openHead");

let headUL = document.querySelector("ul");
let search = document.querySelector(".search");

opener.addEventListener("click", () => {
  toggle();
});

function toggle() {
  headUL.classList.toggle("show");
  search.classList.toggle("show");
}

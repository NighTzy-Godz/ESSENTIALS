// -------- MAIN HOME PAGE ----------------

let opener = document.querySelector("#openHead");

let headUL = document.querySelector("ul");
let search = document.querySelector(".search");

opener.addEventListener("click", () => {
  mainToggle();
});

function mainToggle() {
  headUL.classList.toggle("show");
  search.classList.toggle("show");
}

// ---------------- MENU PAGE -------------------

let sideOpen = document.querySelector("#sideOpen");
let sideClose = document.querySelector("#sideClose");
let sideBar = document.querySelector(".sideBar");

sideOpen.addEventListener("click", () => {
  sideToggle();
});

sideClose.addEventListener("click", () => {
  sideToggle();
});

function sideToggle() {
  sideBar.classList.toggle("sideShow");
  sideOpen.classList.toggle("sideClose");
  sideClose.classList.toggle("sideOpen");
}

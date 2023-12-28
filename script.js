const hamburger = document.querySelector(".navbar-toggle");
const listItem = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  listItem.classList.toggle("show");
});

const toggleBtn = document.querySelector(".toggle-btn");
const showBtn = document.querySelector(".show-icon");
const closeBtn = document.querySelector(".close-icon");
const nav = document.querySelector(".primary-nav");

toggleBtn.addEventListener("click", () => {
  showIcon();
  hideIcon();
  toggleNav();
});

function showIcon() {
  showBtn.classList.toggle("active");
}
function hideIcon() {
  closeBtn.classList.toggle("active");
}
function toggleNav() {
  nav.classList.toggle("active");
}

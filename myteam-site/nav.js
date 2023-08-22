const toggleButton = document.querySelector(".toggle-button input");
const mobileMenu = document.querySelector("nav");

toggleButton.addEventListener("click", (e) => {
  if (e.target.checked) {
    mobileMenu.style.setProperty("transform", "translateX(0)");
  } else {
    mobileMenu.style.setProperty("transform", "translateX(100%)");
  }
});

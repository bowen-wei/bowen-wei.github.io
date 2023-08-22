const profileToggleBtns = document.querySelectorAll(
  ".profile-toggle-button input"
);

profileToggleBtns.forEach((button) => {
  button.checked = false;
});

profileToggleBtns.forEach((button) => {
  addEventListener("click", (e) => {
    const parent = e.target.closest(".profile-toggle-button");
    const cross = e.target.nextElementSibling;
    const card = e.target.getAttribute("aria-controls");
    console.log(`#${card} .front`);
    const front = document.querySelector(`#${card} .front`);
    const back = document.querySelector(`#${card} .back`);

    if (e.target.checked) {
      parent.style.setProperty("background-color", "var(--Rapture-Blue)");
      cross.style.setProperty("transform", "rotate(-135deg)");
      front.style.setProperty("visibility", "hidden");
      back.style.setProperty("visibility", "visible");
      front.style.setProperty("opacity", "0");
      back.style.setProperty("opacity", "1");
    } else {
      parent.style.setProperty("background-color", "var(--Light-Coral)");
      cross.style.setProperty("transform", "rotate(0deg)");

      front.style.setProperty("visibility", "visible");
      back.style.setProperty("visibility", "hidden");
      back.style.setProperty("opacity", "0");
      front.style.setProperty("opacity", "1");
    }
  });
});

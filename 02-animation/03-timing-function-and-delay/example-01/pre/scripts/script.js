const boxes = document.querySelectorAll(".ball-box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
    } else {
      e.target.classList.remove("active");
    }
  });
});

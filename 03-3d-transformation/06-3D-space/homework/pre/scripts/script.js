const obj = document.querySelector(".cube");
const ranges = document.querySelectorAll(".range");

ranges.forEach((range) => {
  range.addEventListener("input", () => {
    obj.style.setProperty(`--${range.name}`, range.value + "deg");
  });
});

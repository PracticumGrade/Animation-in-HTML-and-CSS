const obj = document.querySelector('.demo-pic');
const ranges = document.querySelectorAll('.range');

ranges.forEach(range => {
  range.addEventListener('input', () => {
    obj.style.setProperty(`--${range.name}`, range.value + 'deg');
  });
});
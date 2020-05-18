function dynamicCircle(value) {
  let circle = document.querySelector(".progress-circle-prog");
  circle.style.strokeDasharray = value * 3.8 + " 999";
  let text = document.querySelector(".progress-text");
  let from = document
    .querySelector(".progress-text")
    .getAttribute("data-progress");
  document.querySelector(".progress-text").setAttribute("data-progress", value);
  let start = new Date().getTime();
  setTimeout(function () {
    let now = new Date().getTime() - start;
    let progress = now / 700;
    result =
      value > from
        ? Math.floor((value - from) * progress + from)
        : Math.floor(from - (from - value) * progress);
    text.innerHTML = progress < 1 ? result + "%" : Math.floor(value) + "%";
    if (progress < 1) setTimeout(arguments.callee, 10);
  }, 10);
}

function animateValue(id, start, end, duration) {
  formatCurrent = '';
  let range = end - start;
  let current = start;
  let increment = end > start ? 700 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);
  let timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current >= end) {
      clearInterval(timer);
      formatCurrent = numberWithCommas(end);
      obj.innerHTML = formatCurrent;
    }
  }, stepTime);
}

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}

window.onload = () => {
  animateValue("qnt-doacoes", 0, 144856, 1000);
  dynamicCircle((144856 / 275000) * 100);
};

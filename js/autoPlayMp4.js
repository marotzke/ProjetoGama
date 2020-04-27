const playMp4 = () => {
  let vid = document.querySelector("#teaser-vid");
  if (vid.hasAttribute("data-played", true)) {
    vid.muted = true;
  }
  if (vid.autoplay === false) {
    vid.autoplay = true;
    vid.load();
  }
};

const pauseMp4 = () => {
  let vid = document.querySelector("#teaser-vid");
  if (vid.autoplay === true) {
    vid.autoplay = false;
    vid.load();
    vid.setAttribute("data-played", true);
  }
};

let observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      playMp4();
    } else {
      pauseMp4();
    }
  },
  { threshold: [1] }
);

observer.observe(document.querySelector("#teaser-vid"));

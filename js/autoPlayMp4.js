const playMp4 = () => {
  let vid = document.querySelector("#teaser-vid");
  if (vid.autoplay === false) {
    vid.autoplay = true;
    vid.load();
  }
};

let observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      playMp4();
    }
  },
  { threshold: [1] }
);

observer.observe(document.querySelector("#teaser-vid"));

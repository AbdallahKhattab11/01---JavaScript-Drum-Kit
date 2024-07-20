let sounds = document.querySelectorAll(".sounds-container audio");
let keys = document.querySelectorAll(".container .key");

function playSound(audio) {
  let sound = document.querySelector(`.sounds-container ${audio}`);
  if (sound) {
    sound.currentTime = 0;
    sound.play();

    if (sound.play()) {
      document.addEventListener("keydown", function (e) {
        keys.forEach((key) => {
          if (key.classList.contains(`${e.key}`)) {
            {
              key.classList.add("active");
            }
          }
        });
      });

      document.addEventListener("keyup", function (e) {
        keys.forEach((key) => {
          if (key.classList.contains(`${e.key}`)) {
            {
              key.classList.remove("active");
            }
          }
        });
      });
    }
  }
}
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
    case "s":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
    case "k":
    case "l":
      sounds.forEach((e) => {
        if (e.getAttribute("data-sound") === event.key) {
          playSound(`.${e.getAttribute("data-sound")}`);
        }
      });
      break;
  }
});

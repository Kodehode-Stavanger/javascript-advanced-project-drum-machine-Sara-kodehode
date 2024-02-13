const sounds = [
  {
    Name: "clap",
    key: "A",
    Wav: "clap.wav",
  },
  {
    Name: "hihat",
    key: "S",
    Wav: "hihat.wav",
  },
  {
    Name: "kick",
    key: "D",
    Wav: "kick.wav",
  },
  {
    Name: "openhat",
    key: "F",
    Wav: "openhat.wav",
  },
  {
    Name: "ride",
    key: "G",
    Wav: "ride.wav",
  },
  {
    Name: "snare",
    key: "H",
    Wav: "snare.wav",
  },
  {
    Name: "tink",
    key: "J",
    Wav: "tink.wav",
  },
  {
    Name: "tom",
    key: "K",
    Wav: "tom.wav",
  },
];

window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  sounds.forEach((sound) => {
    if (key.innerHTML === sound.key) {
      console.log(sound.key);
      console.log(sound.Wav);
      const audio = new Audio(`sounds/${sound.Wav}`);
      audio.play();
    }
  });
});

const btns = document.querySelectorAll(".key");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sounds.forEach((sound) => {
      if (e.target.innerHTML === sound.key) {
        console.log(sound.key);
        console.log(sound.Wav);
        const audio = new Audio(`sounds/${sound.Wav}`);
        audio.play();
      }
    });
  });
});

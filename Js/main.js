// © 2025 ZorgoX - Tutti i diritti riservati

const umanoBtn = document.getElementById("umanoBtn");
const alienoBtn = document.getElementById("alienoBtn");
const sound = document.getElementById("spacesound");

umanoBtn.addEventListener("click", () => {
  alert("Benvenuto, Umano terrestre! Pronto per il trading galattico?");
  sound.play();
});

alienoBtn.addEventListener("click", () => {
  alert("Benvenuto, Alieno interstellare! Connetti il tuo wallet ZorgoX!");
  sound.play();
});

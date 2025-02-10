const audio = document.getElementById("audio");
const muteBtn = document.getElementById("mute-btn");
const volumeSlider = document.getElementById("volume-slider");

muteBtn.addEventListener("click", () => {
    if (audio.muted) {
        audio.muted = false;
        muteBtn.textContent = "🔊"; // Ícone de som ligado
    } else {
        audio.muted = true;
        muteBtn.textContent = "🔇"; 
    }
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

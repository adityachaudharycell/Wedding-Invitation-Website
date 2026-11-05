const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicStarted = false;

// Start music when visitor clicks anywhere
document.addEventListener("click", function startMusic() {

    if (!musicStarted) {
        music.play().then(() => {
            musicStarted = true;

            // Show mute button after music starts
            musicBtn.style.display = "block";
        }).catch(error => {
            console.log("Music playback failed:", error);
        });
    }

});
// Mute and Unmute
musicBtn.addEventListener("click", function(event) {
    event.stopPropagation();

    music.muted = !music.muted;

    if (music.muted) {
        musicBtn.innerHTML = "🔇 Unmute";
    } else {
        musicBtn.innerHTML = "🔊 Mute";
    }
});
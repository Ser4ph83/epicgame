const music = document.getElementById("musica");
const btn = document.getElementById("playMusic");

if (music && btn) {
    btn.addEventListener("click", async () => {
        music.muted = false;

        if (music.paused) {
            try {
                await music.play();
                btn.textContent = "⏸️ Pausar Música";
            } catch (e) {
                console.warn("Erro ao tentar tocar o áudio:", e);
            }
        } else {
            music.pause();
            btn.textContent = "🎵 Música";
        }
    });
}

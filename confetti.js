window.onload = () => {
    let duration = 5 * 1000; // 5 segundos
    let end = Date.now() + duration;

    function launchConfetti() {
        confetti({
            particleCount: 10,
            spread: 360,
            startVelocity: 40,
            scalar: 2,
            origin: { x: Math.random(), y: Math.random() }
        });
    }

    function launchFirework() {
        let x = Math.random();
        let y = Math.random() * 0.6; // Garante que o fogo não exploda muito baixo

        confetti({
            particleCount: 100,
            spread: 100,
            startVelocity: 60,
            scalar: 3, // Fogo de artifício maior
            ticks: 80, // Faz durar mais tempo
            colors: ["#ff0000", "#ff8000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#8000ff"],
            origin: { x, y }
        });
    }

    (function frame() {
        launchConfetti();

        // Solta um fogo de artifício a cada 700ms
        if (Math.random() < 0.1) {
            launchFirework();
        }

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
};


    const audio = document.getElementById("fireworksSound");
    audio.play().catch(error => console.log("Autoplay bloqueado pelo navegador:", error));



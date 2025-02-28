function launchFireworks() {
    const duration = 5 * 1000; // 5 segundos
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 10,
            spread: 160,
            origin: { x: Math.random(), y: Math.random() * 0.5 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

window.onload = launchFireworks;
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    let hue = 0;

    function animateBackground() {
        hue = (hue + 1) % 360; 
        body.style.background = `linear-gradient(135deg, hsl(${hue}, 50%, 30%), hsl(${(hue + 100) % 360}, 50%, 15%))`;
        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});

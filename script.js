document.getElementById("noBtn").addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.body.innerHTML = "<h1>Yay! ❤️ I love you! 🥰</h1>";
});
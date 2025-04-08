let strawberryCount = 0;
const messages = [
    "You make everything brighter, madam ji 🌈",
    "You're my comfort space, always 💙",
    "Sending soft kisses and forehead pats 😘",
    "You’re doing amazing, baby gurll 💪💗",
    "Here's a cozy cuddle for you 🤗"
];

function feedStrawberry() {
    strawberryCount++;
    document.getElementById("strawberryCount").innerText = "Strawberries fed: " + strawberryCount;

    if (strawberryCount % 5 === 0) {
        const msg = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById("sweetMessage").innerText = msg;
    }

    if (strawberryCount >= 15) {
        document.getElementById("hiddenLove").style.display = "block";
    }

    createStrawberry();
}

function giveHug() {
    const hugContainer = document.getElementById("hugImgContainer");
    hugContainer.innerHTML = '<img src="hug_animation.png" alt="Warm Gym Boy Hug">';
    document.getElementById("hugText").innerText = "You just got a warm gym boy hug! 💪💗";
}

function playSong() {
    window.open("https://www.youtube.com/watch?v=8of5w7RgcTc", "_blank");
}

function createStrawberry() {
    const strawberry = document.createElement("div");
    strawberry.classList.add("strawberry");

    const container = document.querySelector(".floating-container");
    const maxLeft = window.innerWidth - 40;
    const maxTop = window.innerHeight - 40;

    let left, top;
    do {
        left = Math.random() * maxLeft;
        top = Math.random() * maxTop;
    } while (left > window.innerWidth / 2 - 350 && left < window.innerWidth / 2 + 350 &&
             top > window.innerHeight / 2 - 400 && top < window.innerHeight / 2 + 400);

    strawberry.style.left = `${left}px`;
    strawberry.style.top = `${top}px`;

    container.appendChild(strawberry);

    setTimeout(() => {
        container.removeChild(strawberry);
    }, 6000);
}

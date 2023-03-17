function playAudio() {
    var audioElement = document.getElementById('audio-background');
    audioElement.play();
}

function stopAudio() {
    var audio = document.getElementById("audio-background");
    audio.pause();
    audio.currentTime = 0;
}

function addLight(x, y) {
    const light = document.createElement("div");
    light.className = "light";
    light.style.left = x + "px";
    light.style.top = y + "px";
    document.querySelector(".lights").appendChild(light);

    setTimeout(() => {
        light.style.opacity = 1;
    }, 10);

    setTimeout(() => {
        light.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        light.remove();
    }, 2000);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function flashingLights() {
    const lightsContainer = document.createElement("div");
    lightsContainer.className = "lights";
    document.body.appendChild(lightsContainer);

    for (let i = 0; i < 50; i++) {
        const x = randomInt(0, window.innerWidth);
        const y = randomInt(0, window.innerHeight);
        setTimeout(() => {
            addLight(x, y);
        }, i * 100);
    }

    setTimeout(() => {
        lightsContainer.remove();
    }, 5000);
}

function ToggleBackgroundAndWatermark() {
    var body = document.getElementsByTagName("body")[0];

    if (body.style.backgroundImage === "") {
        body.style.backgroundImage = "url('../images/background.jpg')";
    } else {
        body.style.backgroundImage = "";
    }
}

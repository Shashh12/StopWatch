let timer;
let isRunning = false;
let elapsedSeconds = 0;

function updateDisplay() {
    let hours = Math.floor(elapsedSeconds / 3600);
    let minutes = Math.floor((elapsedSeconds % 3600) / 60);
    let seconds = elapsedSeconds % 60;

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

document.getElementById('startBtn').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedSeconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedSeconds = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();
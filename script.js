let timer;
let isRunning = false;
let elapsedHours = 0;
let elapsedMinutes = 0;
let elapsedSeconds = 0;

function updateDisplay() {
    document.getElementById('hours').textContent = String(elapsedHours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(elapsedMinutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(elapsedSeconds).padStart(2, '0');
}

document.getElementById('startBtn').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedSeconds++;
            if (elapsedSeconds === 60) {
                elapsedSeconds = 0;
                elapsedMinutes++;
                if (elapsedMinutes === 60) {
                    elapsedMinutes = 0;
                    elapsedHours++;
                }
            }
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
    elapsedHours = 0;
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();

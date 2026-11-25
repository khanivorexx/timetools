//TIME//
const out = document.getElementById("out");
const now = new Date();
let tsag = String(now.getHours()).padStart(2, "0");
let min = String(now.getMinutes()).padStart(2, "0");
let sec = String(now.getSeconds()).padStart(2, "0");

const addCount = () => {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  } else if (min === 60) {
    tsag++;
    min = 0;
  } else if (tsag === 24) {
    tsag = 0;
  }
  out.textContent = tsag + ":" + min + ":" + sec;
};
let interval = setInterval(addCount, 1000);
const stopInterval = () => {
  clearInterval(interval);
};

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

//STOPWATCH//
//variants//
let seconds = 0;
let timerId = null;

//NEW DISPLAY//
const updateDisplay = () => {
  const s = seconds % 60;
  const totalMin = (seconds - s) / 60;
  const m = totalMin % 60;
  const h = (totalMin - m) / 60;
  display.textContent =
    String(h).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0");
};

//start button//
startBtn.onclick = () => {
  if (timerId) return;
  updateDisplay();
  timerId = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
};

//stop button//
stopBtn.onclick = () => {
  clearInterval(timerId);
  timerId = null;
};

//reset button//
resetBtn.onclick = () => {
  clearInterval(timerId);
  timerId = null;
  seconds = 0;
  updateDisplay();
};

//TIMER//

//variants//
const timerDisplay = document.getElementById("timerDisplay");
const timerMinutes = document.getElementById("timerMinutes");
const timerSeconds = document.getElementById("timerSeconds");
const timerStartBtn = document.getElementById("timerStartBtn");
const timerStopBtn = document.getElementById("timerStopBtn");
const timerResetBtn = document.getElementById("timerResetBtn");

//remember//
let timeLeft = 0;
let countDown = null;

//NEW DISPLAY//
const updateTimerDisplay = () => {
  const s = timeLeft % 60;
  const m = (timeLeft - s) / 60;
  timerDisplay.textContent =
    String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
};

//TIMER START//
timerStartBtn.onclick = () => {
  if (countDown) return;
  if (timeLeft === 0) {
    const m = Number(timerMinutes.value);
    const s = Number(timerSeconds.value);
    timeLeft = m * 60 + s;
  }
  if (timeLeft <= 0) return;
  updateTimerDisplay();

  countDown = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft === 0) {
      clearInterval(countDown);
      countDown = null;
      alert("Tsag duuslaa!");
    }
  }, 1000);
};

//TIMER STOP//
timerStopBtn.onclick = () => {
  clearInterval(countDown);
  countDown = null;
};

//TIMER RESET//
timerResetBtn.onclick = () => {
  clearInterval(countDown);
  countDown = null;
  timeLeft = 0;
  updateTimerDisplay();
};

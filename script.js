let speed = 0;
let increaseInterval;
let decreaseInterval;

let actualSpeed = document.getElementById("actual-speed");
let pointer = document.getElementById("point");

let startIncreaseSpeed = () => {
  clearMyInterval(decreaseInterval);
  // pointer.style.cssText =
  //   "transform-origin: right; transform: rotate(180deg); background-color: red; transition: 4500ms linear;";

  // document.getElementById("mid").style.cssText =
  //   "background-color: red; transition: 4500ms linear;";

  increaseInterval = setInterval(increaseSpeed, 100);
};

let startDecreaseSpeed = () => {
  clearMyInterval(increaseInterval);

  // pointer.style.cssText =
  //   "transform-origin: right; transform: rotate(0); background-color: green; transition: 4500ms linear;";

  // document.getElementById("mid").style.cssText =
  //   "background-color: green; transition: 4500ms linear;";

  decreaseInterval = setInterval(decreaseSpeed, 100);
};

function increaseSpeed() {
  if (speed < 180) {
    speed++;
  }
  updateSpeedLabel();
}

let decreaseSpeed = () => {
  if (speed > 0) {
    speed--;
  } else {
    clearMyInterval(decreaseInterval);
  }
  updateSpeedLabel();
};

let pressDecreaseSpeed = () => {
  clearMyInterval(increaseInterval);
  clearMyInterval(decreaseInterval);

  // pointer.style.cssText = "background-color: green; transition: 800ms linear;";

  // document.getElementById("mid").style.cssText =
  //   "background-color: green; transition: 800ms linear;";

  decreaseInterval = setInterval(decreaseSpeed, 1);
};

let clearMyInterval = (interval) => {
  if (interval) {
    clearInterval(interval);
  }
};

let updateSpeedLabel = () => {
  actualSpeed.textContent = speed;
};

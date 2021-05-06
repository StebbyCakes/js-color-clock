$progressBar = document.querySelector('.clock-progress-bar');
class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();

    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const newsec = parts.seconds.toString().padStart(2, "0");
    const newmin = parts.minutes.toString().padStart(2, "0");
    const hourFormatted = parts.hour.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${newmin}:${newsec}`;

    this.element.querySelector(".clock-display").textContent = timeFormatted;

    updateProgressBar();

    console.log(timeFormatted);

    console.log(newsec * 0.0167);
  }

  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds()



    }
  }
}


const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();


function color() {
  var newcolor = "";
  var newVar = document.getElementsByClassName('clock-face')[0];
  updateProgressBar();
  newVar.style.backgroundColor = '#' + Math.random().toString(16).substring(2, 8);
}
newColor = color();

var updateColor = (window.setInterval(function() {
  color();
}, 1000))
console.log(color());




let hover = document.getElementsByClassName(['clock-display'])[0];

hover.addEventListener("mouseover", function(event) {
  var newVar = document.getElementsByClassName('clock-face')[0];
  event.target.innerText = newVar.style.backgroundColor.toString(16);
}, false);


function updateProgressBar(){
  var now = new Date();
  var seconds = now.getSeconds();
  $progressBar.style.width = `${seconds/60 * 14}rem`;
}

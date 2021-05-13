$progressBar = document.querySelector('.clock-progress-bar');
var isHovering = true;
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
    if (isHovering === true){
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
  else {
    this.element.querySelector(".clock-display").textContent = componentToHex(document.getElementsByClassName('clock-face')[0].style.backgroundColor);
  }
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
// console.log(color());

function componentToHex(c) {
  var rgb = c;

  rgb = rgb.substring(4, rgb.length-1)
           .replace(/ /g, '')
           .split(',');
var red = parseInt(rgb[0]).toString(16);
var blue = parseInt(rgb[1]).toString(16);
var green = parseInt(rgb[2]).toString(16);
  newColor = (`${red} : ${blue} : ${green}`)
  return  newColor
}


let hover = document.getElementsByClassName(['clock-display'])[0];

hover.addEventListener("mouseenter", function(event) {
  isHovering = false
  console.log(componentToHex(newVar.style.backgroundColor))
}, false);

hover.addEventListener("mouseleave", function(event) {
  isHovering = true
  console.log(componentToHex(newVar.style.backgroundColor))
}, false);


function updateProgressBar(){
  var now = new Date();
  var seconds = now.getSeconds();
  $progressBar.style.width = `${seconds/60 * 14}rem`;
}

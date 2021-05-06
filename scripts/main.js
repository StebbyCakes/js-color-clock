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

    console.log(timeFormatted);
    console.log(newsec * 0.0167);
  }

  getTimeParts(){
    const now = new Date();

    return {
      hour : now.getHours(),
      minutes : now.getMinutes(),
      seconds : now.getSeconds()



    }
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();


function color() {
  var newcolor = "";
document.body.style.backgroundColor = '#' + Math.random().toString(16).substring(2, 8);
} newColor = color();

var updateColor = (window.setInterval(function(){
  color();
}, 1000))
console.log(color());



let hover = document.getElementByClassName('clockdisplay');

hover.addEventListener("mouseover", function(event){
  event.target.value = 'hello';
}, false);

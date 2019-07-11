const Gpio = require('pigpio').Gpio;
 
const button = new Gpio(4, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_DOWN,
  edge: Gpio.RISING_EDGE
});
 
var counter = 0;

console.log("Starting counter...")

button.on('interrupt', function (level) {
  counter++;
});

function intervalFunc() {
  console.log(counter)
  counter = 0;
}

setInterval(intervalFunc, 1000);


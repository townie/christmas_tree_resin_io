var  ledToggle, pressCount;
//provision the gpio pins 22 for the led output and 17 for the button input
var led= require("pi-pins").connect(22),
    button = require("pi-pins").connect(17);

//set the pin mode,  setting pin 22 as an output and 17 as an input
button.mode('in');
led.mode('out');

//set the initial value of the LED to be off.
ledToggle = false;
pressCount= 0;
led.value(true);


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  led.value(false);

  await sleep(2000);
  led.value(true);

  console.log('Two second later');
}

demo();

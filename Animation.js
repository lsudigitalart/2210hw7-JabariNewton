var osc;
var red = 0;
var green =0;
var blue = 0;
var playing = false;
var mic;
function preload(){
  drums = loadSound('assets/drums.wav')
}

function setup() {
  createCanvas(500,500);

  mic = new p5.AudioIn()
  mic.start()
  drums.setVolume(.3);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();

  drums.play();
  kick = loadSound('assets/kick.wav');
  snare = loadSound('assets/snare.wav')
}



    function draw() {
      background(red,green,blue);
      micVol = mic.getLevel();
      ellipse(250, constrain(height-micVol*height*5, 0, height), 10, 10);
    }

function keyTyped() {
  if(keyIsPressed === true){





    if(key === 'q'){
      snare.play();
    }
    if(key === 'w'){
      kick.play();
    }
    if (key === 'a') {
      osc.freq(200);
      osc.amp(2);
      osc.phase(0,1);
      playing = true;
      backgroundColor = color(255,0,0);
      println("up");
      red = red + 5;
    }
    else if (key === 's') {
      osc.freq(205);
      osc.amp(2);
      playing = true;
      backgroundColor = color(0,255,0);
      println("down");
    }
    else if (key === 'd') {
      osc.freq(210);
      osc.amp(2);
      playing = true;
      backgroundColor = color(255,0,0);
      println("up");
    }
      else if (key === 'f') {
      osc.freq(220);
      osc.amp(2);
      playing = true;
      backgroundColor = color(0,255,0);
      println("down");
        }

     else

            // ramp amplitude to 0 over 0.5 seconds
            osc.amp(0, 0.5);
            playing = false;
            backgroundColor = color(0,0,0);
        }
      }

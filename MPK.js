var osc;
var yAxis = 50;
var red = 50;
var green =50;
var blue = 255;
var playing = false;
var mic;
function preload(){
  drums = loadSound('assets/drums.wav')
}

function setup() {
  createCanvas(500,500);
  background(0);
  rect(50,yAxis,100,100);

  mic = new p5.AudioIn()
  mic.start()
  drums.setVolume(.3);
  osc = new p5.Oscillator();
  osc.setType('saw');
  osc.freq(240);
  osc.amp(0);
  drums.playMode('sustain');
  osc.start();

  drums.play();
  kick = loadSound('assets/kick.wav');
  snare = loadSound('assets/snare.wav');

    reverb = new p5.Reverb();
    drums.connect(); // so we'll only hear reverb...

    // connect soundFile to reverb, process w/
    // 3 second reverbTime, decayRate of 2%





}

function draw() {

          fill(255,255,255);
          micVol = mic.getLevel();
          ellipse(250, constrain(height-micVol*height*5, 0, height), 10, 10);


          if (keyIsDown('a')){
            if (key === 'a'){
                    fill(0);
                  }
                }
            rect(0, 350, 50,300);

          if (keyIsDown(LEFT_ARROW)){
                      fill(0);
                    }
              rect(100, 350, 50,300);

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
      osc.freq(410);
      osc.amp(2);
      osc.phase(0,1);
      yAxis = yAxis - 10;
      playing = true;
      backgroundwe(255,0,0);
      println("up");
      red = red + 5;

    }
    if (key === 'e') {
      drums.play();

    }

    if (key === 'r') {
    drums.disconnect();
    reverb.process(drums,3,4);
    if(key === 'y'){
      drums.connect();
    }

  }
    else if (key === 's') {
      osc.freq(420);
      osc.amp(2);
      playing = true;
      backgroundColor = color(0,255,0);
      println("down");
      drums.disconnect();
    }
    else if (key === 'd') {
      osc.freq(430);9
      osc.amp(2);
      playing = true;
      backgroundColor = color(255,0,0);
      println("up");
    }
      else if (key === 'f') {
      osc.freq(440);
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

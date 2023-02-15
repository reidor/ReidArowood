// Rozin Mirror Starter

const cam_w = 640;
const cam_h = 480;
let capture;

function setup() {
  createCanvas(cam_w, cam_h);
  capture = createCapture(VIDEO);
  capture.size(cam_w, cam_h);
  capture.hide();
}

function draw() {
  clear();

  capture.loadPixels();

  if (capture.pixels.length > 0) {
    mirror();
  }
}

// ADD YOUR OWN VERSION OF THE MIRROR DOWN BELOW

function mirror() {
  
  background(255);
  const stepSize = cam_h/5;
  
  push();
  translate(width, 0);
  scale(-1, 1);
  image(capture,0,0)
  pop()
  
  for (let y = cam_h/5; y < cam_h-(cam_h/5); y += stepSize) {
    for (let x = cam_h/5; x < cam_h-(cam_h/5); x += stepSize) {
      const index = ((cam_w - x) + y * cam_w) * 4;

      const r = capture.pixels[index];
      const g = capture.pixels[index + 1];
      const b = capture.pixels[index + 2];
      const brightness = (r + g + b) / 3;

      // USE THE x, y, r, g, or b values to draw things to the screen
      
      
      const size = map(brightness, 0, 255, stepSize/4, stepSize);
     strokeWeight(5);
      stroke(255);
      fill(r, g, b);
      
      rect(x, y, cam_h/5, cam_h/5)
    }
  }
}

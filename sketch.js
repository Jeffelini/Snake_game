var s;
var scl = 20;

var food;

function setup() {
  createCanvas(600,600);
  s = new Snake();
  frameRate(10);
  food = pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(row)));
  food.mult(scl);
}

function draw() {
  background(51);
  s.update();
  s.show();

  s.eat(food);

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0);
  } else {
    s.dir(1,0);
  }
}

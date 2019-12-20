//Week4 icm assignment by Jingyi
//Learn how to make rain drop from https://editor.p5js.org/amandamje/sketches/ByMkKkV0
//Thanks to the help of resident Seho

var rain = [];
var rainingNow = true;
var bgcolor = (100, 100, 100);

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (i = 0; i < 100; i++) {
    rain[i] = new Rain(random(0, window.innerWidth), random(0, -3000));
  }
}

function draw() {
  background(0,3,46);
  ground()
  for (i = 0; i < rain.length; i++) {
    rain[i].dropRain();
    rain[i].splash();
  }
}

function ground() {
  fill(40,32,30);
  stroke(0)
  rect(0, window.innerHeight-100, window.innerWidth, 100)
}

function Rain(x, y) {
  this.x = x;
  this.y = y;
  this.length = 15;
  this.r = 0;
  this.opacity = 200;


  this.dropRain = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 3, this.length);
    this.y = this.y + 6
    if (this.y > window.innerHeight-100) {
      this.length = this.length - 5;
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    stroke(245, this.opacity);
    noFill();
    if (this.y > window.innerHeight-100) {
      ellipse(this.x, window.innerHeight-100, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;
var ball8;

function setup() {
  createCanvas(875, 500);
  strokeWeight(0);


  ball1 = new ball(2, 118.5, -50, 50, 50, 0, 0, 0, 0);
  ball2 = new ball(3, 0, 0, 0, 0, 312.5, -50, 50, 50);
  ball3 = new ball(1, 525, -60, 25, 28, 0, 10, 0, 0);
  ball4 = new ball(4, 0, 0, 0, 0, 725, -50, 25, 25);
  ball5 = new ball(5, 375, -40, 40, 40, 0, 0, 50, 0);
  ball6 = new ball(3, 30, 0, 0, 0, 312.5, -50, 50, 50);
  ball7 = new ball(3, 18.9, -50, 25, 25, 0, 0, 0, 0);
  ball8 = new ball(2, 4, 10, 0, 0, 700, -50, 0, 25);


}

function draw() {

  background(159, 85, 93);



  ball1.display();
  ball1.move();
  ball2.display();
  ball2.move();
  ball3.display();
  ball3.move();
  ball4.display();
  ball4.move();
  ball5.display();
  ball5.move();
  ball6.display();
  ball6.move();
  ball7.display();
  ball7.move();
  ball8.display();
  ball8.move();

  push();
  fill(10,10,255);
  rect(0, 450, 900, 50);
  pop();


}


function ball(itemSpeed, xPosition, yPosition, eWidth, eHeight, rXPosition, ryPosition, rWidth, rHeight) {
  this.speed = itemSpeed;
  this.xPosition = xPosition;

  this.eWidth = eWidth;
  this.eHeight = eHeight;
  this.rXPosition = rXPosition;

  this.rWidth = rWidth;
  this.rHeight = rHeight;
  var ey = -50;
  var ry = -50;

  this.display = function() {
      fill(100, 155, 100);
    ellipse(this.xPosition, ey, this.eWidth, this.eHeight);
    ellipse(this.rXPosition, ry, this.rWidth, this.rHeight);
  };

  this.move = function() {
    ey = ey + this.speed;
    ry = ry + this.speed;

    if(ey > 500) {
      ey = -550;

}

  if(ry > 500) {
    ry = -550;
}
  };


}

var theta = 0;
var y, y1, y2, y3, y4, yTot, L=600;
var freq = 1;
var time = 0, timeChange=L/1000;
var A=100;



function setup() {
createCanvas(640,640);
smooth();
}

function draw() {
  var yShift = height/2;
  background(0);
  strokeWeight(2);
  
  time= 0;


  for(var i=1; i<L; i++) {
    y1 = A * (sin(radians(time/2)) * cos (radians(theta)));
    y2 = A/2 * (sin(radians(time)) * cos (radians(theta)*2));
    y3 = A/3 * (sin(radians(time)*1.5) * cos (radians(theta*3)));     
    y4 = A/4 * (sin(radians(time)*2) * cos (radians(theta*4)));    
    
    
//    y1 = y1 + yShift;
//    y2 = y2 + yShift;
//    y3 = y3 + yShift;
//    y4 = y4 + yShift;
    strokeWeight(2);
    stroke(255);
    point(i+9, y1+yShift-150);
    
    stroke(255, 0, 0);
    point(i+9, y2+yShift-150);
    
    stroke(0, 0, 255);
    point(i+9, y3+yShift-150);

    stroke(0, 255, 0);
    point(i+9, y4+yShift-150);
    
    yTot = y1+y2+y3+y4+yShift+150;
    
    stroke(255);
    strokeWeight(4);
    point(i+9, yTot);
    
    time -= timeChange;
  }

    theta -= freq;
}
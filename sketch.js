var hr, mn, sc ;
var hrAngle, mnngle, scAngle ;

function setup() {
  createCanvas(400,400)  ;
  angleMode(DEGREES) ;
  // createSprite(400, 200, 50, 50) ;
}

function draw() {
  background(0) ; 

  translate(200,200)  ;
  rotate(90) ;

  hr = hour() ;
  mc = minute() ;
  sc = second();

  scAngle = map(sc,0,60,0,360) ;
  mcAngle = map(mn,0,60,0,360) ;
  hrAnglle = map(hr%12,0,12,0,360) ;

  console.log(24%12) ;

  push() ;
  rotate(scAngle) ;
  stroke(255,0,0) ;
  strokeWeight(7) ;
  line(0,0,100,0) ;
  pop() ;

  push() ;
  rotate(mcAngle) ;
  stroke(0,255,0) ;
  strokeWeight(7) ;
  line(0,0,75,0) ;
  pop() ;

  push() ;
  rotate(hrAngle) ;
  stroke(0,0,255) ;
  strokeWeight(7) ;
  line(0,0,50,0) ;
  pop() ;

  stroke(255,0,255) ;
  noFill() ;

  stroke(255,0,0) ;

   arc(0,0,300,300,0,scAngle) ;

  stroke(0,255,0) ;
  arc(0,0,280,280,0,mcAngle) ;

  stroke(0,0,255) ;
  arc(0,0,260,260,0,hrAngle) ;

  drawSprites();
}
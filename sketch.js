var r1, r2
var r3, r4, r5, r6
function setup() {
createCanvas(800,400);
r1 = createSprite(200,200,70,10);
r1.shapeColor = "red";
r2 = createSprite(300,300,70,10);
r2.shapeColor = "green";
r3 = createSprite(150,400,70,10);
r3.shapeColor = "black"
r3.velocityX = 4;
r4 = createSprite(350,350,70,10);
r4.shapeColor = "brown"
r5 = createSprite(50,50,70,10);
r5.shapeColor = "pink"
r6 = createSprite(400,400,70,10);
r6.shapeColor = "purple"
r6.velocityX = -4;
}

function draw() {
  background(255,255,255);  
r1.y = mouseY
r1.x = mouseX
bounceOff(r3,r6);
isTouching(r1,r4);
 drawSprites(); 
}


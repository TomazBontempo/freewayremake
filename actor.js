////Actor's code////

//Variables//
let xActor = 95;
let yActor = 366;
let wActor = 30;
let hActor = 30;
let hit = false
let sP1 = 0

//Functions//

//Show:
function showActor(){
  image(actorImage, xActor, yActor, wActor, hActor);
}

//Move:
function moveAcator(){
  if (keyIsDown(UP_ARROW)){
    yActor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canMovey()){
      yActor += 2;
    }
  }
   if (keyIsDown(LEFT_ARROW)){
    xActor -= 2;
  }
   if (keyIsDown(RIGHT_ARROW)){
    xActor += 2;
  }
}

function canMovey(){
  return yActor < 366
}

//Collide:
function checkCollide(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carImages.length; i++){
    collide = collideRectCircle(xCars[i], yCars[i], wCars, hCars, xActor, yActor, 15)
    if (collide){
      resetActor();
      cow.play();
      if (positiveScore()){
        sP1 -= 1;
      }
    }
  }
}

function resetActor(){
  xActor = 100;
  yActor = 366; 
}

//Score:
function sBoardP1(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,20,147));
  text(sP1, width / 5, 27);
}

function pointP1(){
  if (yActor < 15){
    sP1 += 1;
    resetActor();
    bell.play();
  }
}

function positiveScore(){
  return sP1 > 0;
}
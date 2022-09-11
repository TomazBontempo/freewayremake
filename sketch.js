//////REMAKE FREEWAY//////

////Game////
function setup() {
    createCanvas(500, 400);
    music.loop();
  }
  
  function draw() {
    background(roadImage);
    showActor();
    showCars();
    moveCars();
    moveAcator();
    resetCars();
    checkCollide();
    sBoardP1();
    pointP1();
  }
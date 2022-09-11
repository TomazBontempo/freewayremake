////Cars's code////

//Variables//
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let wCars = 50
let hCars = 40
let sCars = [2.5, 3.2, 3, 5, 4, 2.3];


//Functions//

//Show:
function showCars(){
  for (let i = 0; i < carImages.length; i++){
    image(carImages[i], xCars[i], yCars[i], wCars, hCars);
  }
}

//Move:
function moveCars(){
  for (let i = 0; i < carImages.length; i++){
    xCars[i] -= sCars[i];
  }
}

//Reset:
function resetCars(){
  for (let i = 0; i < carImages.length; i++){
    if (roadEnd(xCars[i])){
      xCars[i] = 600
    }
  }
}

function roadEnd (xCars){
  return xCars <- 50;
}
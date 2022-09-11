////Images's code////

//Variables:
let roadImage;
let actorImage;
let car1Image;
let car2Image;
let car3Image;

//Functions:
function preload(){
  roadImage = loadImage("images/estrada.png");
  actorImage = loadImage("images/ator-1.png");
  car1Image = loadImage("images/carro-1.png");
  car2Image = loadImage("images/carro-2.png");
  car3Image = loadImage("images/carro-3.png");
  
  carImages = [car1Image, car2Image, car3Image, car1Image, car2Image, car3Image]
  
  music = loadSound("mp3/music.mp3");
  cow = loadSound("mp3/cow.mp3");
  bell = loadSound("mp3/bell.mp3");
}
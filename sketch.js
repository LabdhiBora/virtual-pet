//Create variables here
var  dog;
var happyDog;
var database;
var foods;
var foodStock;

function preload()
{
  //load images here
  dogHappy=loadImage("images/Dog.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addAnimation(dog);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
background("blue");

if(keyWentUp(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}
textSize(30);
fill ("black");
text ("Note: please pree the UP arrow to feed the dog",200,200);
  drawSprites();
  //add styles here

}
function writeStock(x){
  database.ref('/').update({
    food:x;
  })
}
function readStock(data){
foods=data.val
}




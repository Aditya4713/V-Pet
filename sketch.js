var dog, happyDog, database, foodS, foodStock

function preload()
{
  dog1Img = loadImage("images/doglmg.png");
  dog2Img = loadImage("images/doglmg1.png");

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog(dog1Img);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
if(keyWentDown(UP_ARROW)){
  writeStocks(foodS);
  dog.addImage(dogHappy);
}
dog.display();
}
}
function readStock(data){
  foodS=data.val();
  }
  function writeStock(x,y){
      database.ref('/').update({
      })
  }
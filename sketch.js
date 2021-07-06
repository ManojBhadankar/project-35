//Create variables here
var dog,happyDog,database,foodS,foodStock

function preload()
{

	//load images here
 dogImg=loadImage("images/dogImg.png");
 happyDogImg=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  
  var dog=createSprite(200,300,20,20);
  dog.addImage(dogImg);
  dog.scale=0.2;

  
  
}


function draw() {  

  background(46,139,87)

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDogImg);
  textSize(20);
   fill("white");
  text("Press UP_ARROW Key To Feed Dog Milk!",50,50);
  text("Food remaining: " +foodS ,150,150);
  
 }

  drawSprites();
  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x+1;
  }

  database.ref('/').update({
    Food:x
  })
}




var snake;

var food;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);


  snake=new Snake(9);

  //snake.elongateAfterEating({x:200,y:150})

  food=new Food();
}

function draw() {
  background(0);  


  snake.display();
  snake.moveSnake();

  
  food.display();

  food.detectEatenAndRecreate(snake.stacks);

  drawSprites();
}
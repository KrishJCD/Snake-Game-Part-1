class Food
{
    constructor()
    {
        this.foodie={x:random(10,400),y:random(10,350)}
    }

    display()
    {
        fill("red");
        ellipse(this.foodie.x,this.foodie.y,9);
    }

    detectEatenAndRecreate(snake)
    {
        for(var i=0;i<snake.length;i++)
        {
            if(dist(snake[i].x,snake[i].y,this.foodie.x,this.foodie.y)<=10){
                this.foodie.x=random(10,400);
                this.foodie.y=random(10,350);
            }
        }
    }
}
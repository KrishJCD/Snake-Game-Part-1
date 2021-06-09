class Snake
{
    constructor(w)
    {
        this.x=200;
        this.y=200;
        this.color=255;
        this.w=w;
        this.stacks=[{x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200}];
    }

    display(){
        for(var i=0;i<this.stacks.length;i++)
        {
            fill(this.color);
            rect(this.stacks[i].x,this.stacks[i].y,this.w,this.w);
        }
    }

    static elongateAfterEating(food)
    {
        this.stacks.push({x:food.x,y:food.y});
    }

    moveSnake()
    {
        if(keyDown("UP"))
        {
            this.moveSnakeAlgo('y','-');
        }

        if(keyDown("DOWN"))
        {
            this.moveSnakeAlgo('y','+');
        }

        if(keyDown("LEFT"))
        {
            this.moveSnakeAlgo('x','-');
        }

        if(keyDown("RIGHT"))
        {
            this.moveSnakeAlgo('x','+');
        }
    }


    //DIR: x , SIGN: - or +
    moveSnakeAlgo(dir,sign)
    {
        if(dir=='x'){
            for(var i=0;i<this.stacks.length;i++)
            {
                if(sign=='-')
                this.stacks[i].x-=10;
                else
                this.stacks[i].x+=10;
            }
        }

        if(dir=='y'){
            for(var i=0;i<this.stacks.length;i++)
            {
                if(sign=='-')
                this.stacks[i].y-=10;
                else
                this.stacks[i].y+=10;
            }
        }
    }
}
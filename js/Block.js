class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);

        if(this.body.speed <3){
          image(this.image,pos.x,pos.y,this.width, this.height);
          
        }
        else{

          World.remove(world, this.body);
          push();
          tint(255,this.visibility)
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
          this.visiblity = this.visiblity - 10;
          //this.visiblity = 255;
          
          //this.visiblity = this.x;
          //this.visiblity = this.body.position.x;
        
         
          
        
          
          pop();
        }


        }
}
class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "orange";
    this.life2 = "orange";
    this.life3 = "orange";

    World.add(world, this.body);
  }

  life() {
    push();
   //write a correct code to show lives as three green rectangles in a strainght line.
   textSize(23);
   fill("white")
  text("Player",width-1200,45)
   fill(this.life1);
   rect(width -1320,50,70,30);
   fill(this.life3);
   rect(width -1250,50,70,30);
   fill(this.life2);
   rect(width -1180,50,70,30);
    pop();
  }

 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

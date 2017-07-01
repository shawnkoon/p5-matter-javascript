function ground(x, y, w, h, options) {
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;

  World.add(world, this.body);

  this.show = function() {
    push();
    stroke(200);
    fill(170);
    rectMode(CENTER);
    rect(200, height, width, 10);
    pop();
  }
}
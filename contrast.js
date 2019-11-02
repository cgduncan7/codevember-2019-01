function mod (a) {
  return function (b) {
    return a - Math.floor(a / b) * b;
  }
}

function mapContrastToColor (sketch, contrast) {
  var from = sketch.color(216, 17, 89);
  var to = sketch.color(81, 214, 255);
  return sketch.lerpColor(from, to, contrast);
}

function mapContrastToVelocity (contrast) {
  var slow = 5.0;
  var fast = 20.0;
  return ((fast - slow) * contrast) + slow;
}

function mapContrastToAcceleration (contrast) {
  var low = 0.001;
  var high = 0.2;
  return (high - low) * contrast + low;
}

function mapContrastToSize (contrast) {
  var invContrast = 1.0 - contrast;
  var small = 10;
  var big = 50;
  return (big - small) * invContrast + small;
}

function mapContrastToPathing (contrast) {
  var invContrast = 1.0 - contrast;
  var small = 0.001;
  var big = 3.1415;
  var angle = (big - small) * invContrast + small;

  var lowChance = 0.005;
  var highChance = 0.35;
  var chance = (highChance - lowChance) * contrast + lowChance;
  return { angle, chance };
}

function contrastPoint (sketch, contrast) {
  this.loc = sketch.createVector(sketch.width/2.0, sketch.height/2.0);
  this.color = mapContrastToColor(sketch, contrast);
  this.velocity = mapContrastToVelocity(contrast);
  this.acceleration = mapContrastToAcceleration(contrast);
  this.size = mapContrastToSize(contrast);
  this.pathing = mapContrastToPathing(contrast);
  this.angle = Math.random() * sketch.TWO_PI;
  this.velVec = sketch.createVector(0, 0);
  this.accelVec = p5.Vector.fromAngle(this.angle, this.acceleration);
  this.changePath(sketch);
}

contrastPoint.prototype.changePath = function(sketch) {
  this.angle = ((Math.random() >= 0.5 ? 1 : -1) * Math.random() * this.pathing.angle) + this.angle;
  this.accVec = p5.Vector.fromAngle(this.angle, this.acceleration);
  this.velVec = this.velVec.rotate(this.angle);
};

contrastPoint.prototype.update = function(sketch) {
  if (Math.random() <= this.pathing.chance) {
    this.changePath(sketch);
  }
  this.velVec.add(this.accVec);
  if (this.velVec.mag() > this.velocity) {
    this.velVec.setMag(this.veloctiy);
  }
  this.loc.add(this.velVec);
}

contrastPoint.prototype.draw = function(sketch) {
  sketch.push();
  sketch.stroke(this.color);
  sketch.fill(this.color);
  var mx = mod(this.loc.x)(sketch.width);
  var my = mod(this.loc.y)(sketch.height);
  console.log(mx, my);
  sketch.ellipse(mx, my, this.size, this.size);
  sketch.pop();
}
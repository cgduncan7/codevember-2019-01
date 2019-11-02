/**
 * sketch
 */
var s = function(sketch) {
  // #region settings
  const framerate = 120;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const numContrastPoints = 100;
  const contrastPoints = [];
  const bg = sketch.color(0, 0, 0, 50);
  // #endregion

  // #region p5
  sketch.setup = function() {
    const p5canvas = sketch.createCanvas(w, h);
    canvas = p5canvas.canvas;
    sketch.frameRate(framerate);

    for (let i = 0; i < numContrastPoints; i += 1) {
      const cp = new contrastPoint(sketch, i / numContrastPoints);
      contrastPoints.push(cp);
    }
    sketch.background(bg);
  }

  sketch.draw = function() {
    sketch.background(bg);

    for (let cp of contrastPoints) {
      cp.update(sketch);
      cp.draw(sketch);
    }
  }
  // #endregion
};

var sketch = new p5(s, document.getElementById('sketch'));
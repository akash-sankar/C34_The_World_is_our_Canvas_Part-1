var drawing=[];
var currentPath=[];

function setup() {
  canvas = createCanvas(1000, 600);
  canvas.mousePressed(start);
}

function draw() {
  background(0,126,151);

  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  
  strokeWeight(7);
  noFill();
  stroke(255,100,0);
 
  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }

}
function start(){
  currentPath=[];
  drawing.push(currentPath);
}

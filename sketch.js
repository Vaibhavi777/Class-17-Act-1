var box, box2,box3
function setup() 
{
  createCanvas(400, 400);
box=new Box(70,100,20,30,20,5)
// box2=new Box(50,22,10,5,0.001)
// box3=new Box(190,120,55,100)
}

function draw() 
{
  background(220);
box.display()
box.moveup()
box.move()
// box2.display()
// box3.display()
// box2.move()
}


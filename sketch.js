function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    background("red")
    strokeWeight(5)
    fill('white')
    ellipse(175, 300, 50, 30)
    ellipse(225, 300, 50, 30)
    fill('yellow')
    ellipse(165, 250, 30, 50)
    ellipse(235, 250, 30, 50)
    rect(160, 210, 80, 80)
    
    
    
    triangle(165, 220, 200, 230, 185, 240)
    triangle(235, 220, 200, 230, 215, 240)
    fill('white')
    strokeWeight(3)
    ellipse(200, 242, 10, 10)
    strokeWeight(5)
    ellipse(170, 115, 45, 80)
    ellipse(230, 115, 45, 80)
    ellipse(200, 180, 120, 100)
    strokeWeight(0)
  
    ellipse(175, 140, 35, 25)
    ellipse(225, 140, 35, 25)
    fill('black')
    ellipse(180, 185, 10, 10)
    ellipse(220, 185, 10, 10)
    strokeWeight(5)
    line(195, 200, 205, 205);
    line(195, 205, 205, 200);
    
    
  }
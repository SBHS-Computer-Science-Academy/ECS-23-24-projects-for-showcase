class Heal{

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  drawHeal(){
    push()
    translate(this.x,this.y)
    noStroke()
    fill(5, 209, 255)
    rect(20,20,30,10)
    rect(30,10,10,30)  
    pop()
  }

  HealX(){
    return this.x
  }

  HealY(){
    return this.y
  }
  
}
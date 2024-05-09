function setup() {
  createCanvas(425,550);//this size canvas works well for printing your border on 8.5x11 inch paper.
  background("#324aa8");//you may change this to any color
for(let i = 5; i < 1000; i=i+10)
  {//for loop body
    ellipse(i,5,10,10);
    
     let s = 'never back down never what never give up.';
      text(s, 150, 400, 70, 80);

      //describe('The sample text "The quick brown fox..." written in black across several lines.');
  }
  for(let i = 5; i < 1000; i=i+10){
    //triangle(i,200, i+10,170, i+20,200)
     ellipse(5,i,10,10);
  }
  //for(let i = 20; i < 300; i = i + 50) {
  for(let i = 5; i < 1000; i=i+10) {
    ellipse(i,545,10,10);
  }
    for(let i = 5; i < 1000; i=i+10){
      ellipse(420,i,10,10);
    }
  fill("#27cc53")
  rect(63,25,290,309)//creeper head
  fill("black")
  rect(90,70,80,90)//creeper eyes
  rect(247,70,80,90)//creeper eyes
  rect(169,160,79,110)//creeper middle mouth
  rect(99,197,70,110)//creeper left mouth
  rect(247,197,70,110)
}

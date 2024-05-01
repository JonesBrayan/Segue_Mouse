let novacor; //variavel
let posiçãoH;
let posiçãoV;

function setup() {
  
  createCanvas(400, 400); 
  background(220);
novacor = color(random(0,255),random(0,255),random(0,255));//red, green, blue
 posiçãoH = 200;
 posiçãoV = 200; 
}

function draw() {
  
 fill(novacor) 
 circle(posiçãoH, posiçãoV ,45);
  
  if(mouseX < posiçãoH) {
 posiçãoH = posiçãoH - 1; 
 }else{
 posiçãoH = posiçãoH + 1 ;  
}
  
  
  if(mouseY < posiçãoV) {
 posiçãoV = posiçãoV - 1;  
 }else{
 posiçãoV = posiçãoV + 1 ;  
}

 if(mouseIsPressed) {
novacor = color(random(0,255),random(0,255),random(0,255),random(0,100)
);
; }
  
}
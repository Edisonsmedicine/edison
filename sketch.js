
let playbutton
let babygame
let babysprite
let bottles
let arrow
let title = true

function preload(){
  playbutton = loadImage('assets/play2.png')
babygame = loadImage('assets/babygame2.png')
babysprite = loadImage('assets/babysprite2.png')
bottles = loadImage('assets/bottles.png')
arrow = loadImage('assets/arrow.png')

}



function setup(){
createCanvas(windowWidth,windowHeight);
//960 x 1750
}
function draw(){
background(255,255,255);

if(title == true){

  titlescreen()
}
else {
  playscreen()
}
}
function mouseClicked() {
  if(title==true){
    if(mouseX > sFixX(100) && mouseX < sFixX(850) && mouseY > sFixY(1165) ){
       title = false
    }
  }
  else {
    if(mouseX > sFixX(700) && mouseX < sFixX(1000) && mouseY > sFixY(1500) && mouseY < sFixY(1750) ){
       dialogueNumber++;
    }

  }
}

function sFixX(number){
  let l = number/960*windowWidth;
  return l
}
function sFixY(number){
  let l = number/1750*windowHeight;
  return l
}

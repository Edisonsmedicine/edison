
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
createCanvas(960, 1750);

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
    if(mouseX > 100 && mouseX < 850 && mouseY > 1165 ){
       title = false
    }
  }
  else {
    if(mouseX > 700 && mouseX < 1000 && mouseY > 1500 && mouseY < 1750 ){
       dialogueNumber++;
    }

  }
}

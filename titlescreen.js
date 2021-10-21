function titlescreen(){
  fill(0,0,0)
  rect(0,1100,960,700)

  fill(0,0,0)
  rect(100,100,750,200)
  image(babygame, 100,100)

  if(mouseX > 100 && mouseX < 850 && mouseY > 1165 ){
     fill(100,30,70)
  }
  else {
    fill(255,30,70)
  }


  rect(100,1165,750,500)
  image(playbutton, 100,1165)

image(bottles,-20,500)

  image(babysprite, 250,500)



}

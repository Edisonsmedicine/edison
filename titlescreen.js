function titlescreen(){
  fill(0,0,0)
  rect(sFixX(0),sFixX(1100),sFixY(960),sFixY(700))

  fill(0,0,0)
  rect(sFixX(100),sFixX(100),sFixY(750),sFixY(200))
  image(babygame, sFixX(100),sFixY(100))

  if(mouseX >sFixX(100) && mouseX < sFixX(850) && mouseY > sFixY(1165) ){
     fill(100,30,70)
  }
  else {
    fill(255,30,70)
  }


  rect(sFixX(100),sFixX(1165),sFixY(750),sFixY(500))
  image(playbutton, sFixX(100),sFixY(1165))

  image(bottles,sFixX(-20),sFixY(500))

  image(babysprite, sFixX(250),sFixY(500))
}

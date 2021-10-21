function playscreen(){



fill(0,0,0)
rect(sFixX(0),sFixX(1100),sFixY(960),sFixY(700))

fill(0,0,0)
rect(sFixX(700),sFixX(1500), sFixY(350),sFixY(300))

image(arrow, sFixX(670),sFixY(1450))

fill(0,0,0)
rect(sFixX(0),sFixX(0),sFixY(400),sFixY(200))

fill(200,0,0)
rect(sFixX(700),sFixX(0),sFixY(800),sFixY(200))



textSize(50)
fill(255,255,255)
text(dialogue[dialogueNumber],sFixX(30),sFixY(1165))

}

let dialogueNumber = 0

let dialogue = [
                "Congradulations! You have been born. \nI will be your conscious and guide you \nthrough for first year of being a human. \nTap the arrow to start your new life! ",
                "You are in your carseat, as your parents \nare up front, driving to your new home. \nYou notice that your seat buckles \naren't fully fastened. What do you do?",
                "third line"
              ]

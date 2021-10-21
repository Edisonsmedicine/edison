function playscreen(){



fill(0,0,0)
rect(0,1100,960,700)

fill(0,0,0)
rect(700,1500, 350,300)

image(arrow, 670,1450)

fill(0,0,0)
rect(0,0,400,200)

fill(200,0,0)
rect(700,0,800,200)



textSize(50)
fill(255,255,255)
text(dialogue[dialogueNumber],30,1165)

}

let dialogueNumber = 0

let dialogue = [
                "Congradulations! You have been born. \nI will be your conscious and guide you \nthrough for first year of being a human. \nTap the arrow to start your new life! ",
                "You are in your carseat, as your parents \nare up front, driving to your new home. \nYou notice that your seat buckles \naren't fully fastened. What do you do?",
                "third line"
              ]

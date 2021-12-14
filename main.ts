controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let Yes = 0
    let Snow = 0
    Question = game.askForString("Did it snow yesterday?", 3)
    if (Snow == Yes) {
    	
    } else {
    	
    }
})
let Question = ""
scene.setBackgroundColor(3)
let Cat = sprites.create(assets.image`Cat`, SpriteKind.Player)
Cat.setPosition(77, 97)
Cat.sayText("Did it snow yesterday? Press B to answer", 5000, false)

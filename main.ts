controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let Yes = 0
    let Snow = 0
    Question = game.askForString("Did it snow yesterday?", 3)
    if (Snow == Yes) {
        callAll()
        pause(1000)
        callAll()
    } else {
    	
    }
})
function snow () {
    for (let index = 0; index < 10; index++) {
        projectile2 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . 1 1 . . . 1 1 1 . . . . . . 
            . . 1 1 . 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . . 1 1 1 . . . . 1 . 
            . . . . . . . . . . . . . . . . 
            `, randint(0, -50), randint(0, 50))
    }
}
function callAll () {
    snow()
    pause(1000)
    snow()
    pause(1000)
    snow()
    pause(1000)
    snow()
    pause(1000)
    snow()
    pause(1000)
}
let projectile2: Sprite = null
let Question = ""
scene.setBackgroundColor(3)
let Cat = sprites.create(assets.image`Cat`, SpriteKind.Player)
Cat.setPosition(77, 97)
Cat.sayText("Did it snow yesterday? Press B to answer", 5000, false)

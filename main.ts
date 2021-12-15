function flower2 () {
    for (let index = 0; index < 7; index++) {
        flower = sprites.createProjectileFromSide(assets.image`Flower`, randint(0, -50), randint(0, 50))
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let Snow = ""
    Question = game.askForString("Did it snow yesterday?", 3)
    if (Snow == Yes) {
        callAll()
        pause(1000)
        callAll()
    } else {
        callAllFlower()
        pause(1000)
        callAllFlower()
    }
})
function callAllFlower () {
    flower()
    pause(1000)
    flower()
    pause(1000)
    flower()
    pause(1000)
    flower()
    pause(1000)
    flower()
    pause(1000)
}
function snow () {
    for (let index = 0; index < 7; index++) {
        flower = sprites.createProjectileFromSide(img`
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    flower.destroy()
    info.changeScoreBy(1)
})
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
let Question = ""
let flower: Sprite = null
let Yes = ""
scene.setBackgroundColor(3)
let Cat = sprites.create(assets.image`Cat`, SpriteKind.Player)
Cat.setPosition(77, 97)
Cat.sayText("Did it snow yesterday? Press B to answer", 5000, false)
controller.moveSprite(Cat)
Yes = "Yes"
Cat.setStayInScreen(true)

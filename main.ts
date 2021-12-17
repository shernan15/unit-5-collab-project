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
        flower1 = sprites.createProjectileFromSide(img`
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
function flower () {
    for (let index = 0; index < 7; index++) {
        flower1 = sprites.createProjectileFromSide(assets.image`Flower`, randint(0, -50), randint(0, 50))
    }
}
function username (name: string) {
    return "Hello " + name + "!"
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pause(10000)
    game.over(true)
    game.reset()
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
let flower1: Sprite = null
let Question = ""
let Yes = ""
scene.setBackgroundColor(3)
let inputName = game.askForString("What is your name?", 8)
let userName = username(inputName)
let Cat = sprites.create(assets.image`Cat`, SpriteKind.Player)
Cat.setPosition(77, 97)
Cat.sayText("" + userName + " Did it snow yesterday? Press B to answer", 5000, false)
controller.moveSprite(Cat)
Yes = "Yes"
Cat.setStayInScreen(true)

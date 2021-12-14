scene.setBackgroundColor(3)
let Cat = sprites.create(assets.image`Cat`, SpriteKind.Player)
Cat.setPosition(77, 97)
Cat.sayText(game.askForString("Did it snow yesterday?", 3), 1000, false)

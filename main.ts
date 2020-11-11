input.onButtonPressed(Button.A, function () {
    Flapy_Bird.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Flapy_Bird.change(LedSpriteProperty.Y, -1)
})
let tick = 0
let Flapy_Bird: game.LedSprite = null
Flapy_Bird = game.createSprite(0, 2)
let Green_Bar: game.LedSprite[] = []
let Emptygreenbar = randint(0, 4)
Flapy_Bird.set(LedSpriteProperty.Blink, 200)
for (let index = 0; index <= 4; index++) {
    if (index != Emptygreenbar) {
        Green_Bar.push(game.createSprite(4, index))
    }
}
basic.forever(function () {
    while (Green_Bar.length > 0 && Green_Bar.removeAt(0).get(LedSpriteProperty.X) == 0) {
        Green_Bar.removeAt(0).delete()
    }
    for (let Obstacle_1 of Green_Bar) {
        Obstacle_1.change(LedSpriteProperty.X, -1)
    }
    if (tick % 3 == 0) {
        Emptygreenbar = randint(0, 4)
        Flapy_Bird.set(LedSpriteProperty.Blink, 200)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != Emptygreenbar) {
                Green_Bar.push(game.createSprite(4, index2))
            }
        }
    }
    for (let Obstacle2 of Green_Bar) {
        if (Obstacle2.get(LedSpriteProperty.X) == Flapy_Bird.get(LedSpriteProperty.X) && Obstacle2.get(LedSpriteProperty.Y) == Flapy_Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    tick += 1
    basic.pause(1000)
})

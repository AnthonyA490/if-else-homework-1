input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    player.move(1)
})
let player: game.LedSprite = null
basic.showIcon(IconNames.Angry)
game.setScore(0)
let enemy = game.createSprite(randint(0, 10), randint(0, 10))
player = game.createSprite(0, 0)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        game.addScore(1)
        basic.showIcon(IconNames.Yes)
        basic.showNumber(game.score())
        enemy.delete()
        enemy = game.createSprite(randint(0, 10), randint(0, 10))
    }
})

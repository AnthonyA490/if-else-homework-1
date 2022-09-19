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
let enemy = game.createSprite(randint(0, 5), randint(0, 5))
player = game.createSprite(0, 0)
basic.forever(function () {
	
})

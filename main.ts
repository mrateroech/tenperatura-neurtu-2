basic.forever(function () {
    if (input.temperature() < 20) {
        basic.showIcon(IconNames.Square)
        basic.showNumber(input.temperature())
        music.playTone(330, music.beat(BeatFraction.Breve))
    }
})
basic.forever(function () {
    if (input.temperature() > 17) {
        basic.showIcon(IconNames.Chessboard)
        basic.showNumber(input.temperature())
        music.playTone(262, music.beat(BeatFraction.Breve))
    }
})

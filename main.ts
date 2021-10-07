let carril = 0
let auto = 0
input.onButtonPressed(Button.A, function () {
    if (carril == 4) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    if (carril < 4) {
        carril = carril + 1
    }
})
input.onButtonPressed(Button.AB, function () {
    carril = randint(0, 4)
    basic.showNumber(carril)
    basic.clearScreen()
    led.plot(carril, 0)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (carril == 0) {
        music.playTone(880, music.beat(BeatFraction.Whole))
    }
    if (carril > 0) {
        carril = carril - 1
    }
})
function mover () {
    while (auto < 4) {
        auto += 1
        led.plot(carril, auto)
        basic.pause(500)
        basic.clearScreen()
    }
    if (auto == 4) {
        auto = 0
        led.plot(carril, 0)
        basic.pause(500)
        basic.clearScreen()
        auto = 1
        led.plot(carril, auto)
        basic.pause(500)
        basic.clearScreen()
    }
}
basic.forever(function () {
    mover()
})

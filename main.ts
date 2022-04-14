pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    if (input.runningTime() - time > 50) {
        time = input.runningTime()
        count = time - 1
    }
    time = input.runningTime()
    serial.writeValue("press", 0)
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    count = 0
    serial.writeValue("press", 1)
})
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    if (input.runningTime() - time > 50) {
        time = input.runningTime()
        count = time + 1
    }
    time = input.runningTime()
    serial.writeValue("press", 0)
})
function music2 () {
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(740, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.pause(500)
}
let item = 0
let Distance = 0
let time = 0
let count = 0
count = 0
time = input.runningTime()
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
serial.redirectToUSB()
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Inches
    )
    while (item != count) {
        item = count
        serial.writeValue("item", item)
    }
    if (Distance <= 12) {
        music2()
        for (let index = 0; index < 4; index++) {
            images.createBigImage(`
                # . . . . . . . . #
                . # . . . . . . # .
                . . # . . . . # . .
                . . . # . . # . . .
                . . . . # # . . . .
                `).scrollImage(1, 200)
        }
    }
    if (Distance <= 6) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (Distance > 6 && Distance <= 12) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (Distance > 12 && Distance <= 24) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (Distance > 24) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})

let Distance = 0
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
basic.forever(function () {
    let dis = 0
    Distance = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Inches
    )
    if (dis <= 12) {
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

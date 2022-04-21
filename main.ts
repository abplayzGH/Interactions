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
let f = 0
let Distance = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Inches
    )
    if (Distance <= 12) {
        f = 1
    } else if (Distance <= 6) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (Distance > 6 && Distance <= 12) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (Distance > 12 && Distance <= 24) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (Distance > 24) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
control.inBackground(function () {
	
})

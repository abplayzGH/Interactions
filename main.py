dis = 0
while True:
    dis = sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.INCHES)
    basic.pause(500)
while True:
    if dis >= 4:
        for index in range(4):
            images.create_big_image("""
                . . # . # . # . . .
                                . . . # # # . . . .
                                # # # # # # # # # #
                                # . . # # # . . # .
                                . . # . # . # . . #
            """).scroll_image(1, 200)
    basic.pause(1000)
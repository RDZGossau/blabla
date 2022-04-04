let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.pause(2000)
strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
basic.pause(2000)
strip.clear()
strip.show()
basic.forever(function () {
    for (let LEDNr = 0; LEDNr <= 30; LEDNr++) {
        strip.setPixelColor(LEDNr, neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(500)
    }
})

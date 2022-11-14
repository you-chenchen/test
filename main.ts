let 開關 = false
input.onButtonPressed(Button.A, function () {
    開關 = true
})
input.onButtonPressed(Button.B, function () {
    開關 = false
})
basic.forever(function () {
    if (開關) {
        KSR030.RGB_LED().showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        KSR030.RGB_LED().showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        KSR030.RGB_LED().showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
    } else {
        KSR030.RGB_LED().clear()
        KSR030.RGB_LED().show()
    }
})

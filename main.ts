input.onButtonPressed(Button.A, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.YELLOW)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.PINK)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    }
})
DFRobotMaqueenPlus.I2CInit()

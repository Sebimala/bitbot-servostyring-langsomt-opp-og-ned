input.onButtonPressed(Button.A, function () {
    for (let indeks = 0; indeks <= 90; indeks++) {
        bitbot.bbSetServo(BBServos.P1, indeks)
        basic.pause(10)
    }
    for (let indeks = 0; indeks <= 90; indeks++) {
        bitbot.bbSetServo(BBServos.P1, 90 - indeks)
        basic.pause(10)
    }
})

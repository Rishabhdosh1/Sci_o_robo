motion.drive(25, 35)
loops.everyInterval(500, function on_every_interval() {
 //basic.showNumber(sonar.checkSonar())
})
basic.forever(function on_forever() {
    led.plot(0, 0)
    if (sonar.isSonar(Comparison.CLOSER, 25) && sonar.checkSonar() != 0) {
        motion.stop()
    } else {
        
    }
    
})

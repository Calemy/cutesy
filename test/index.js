async function main(){
    const Logger = require('../index.js')
    const logger = new Logger()


    for(color of ["black", "white", "red", "darkGreen", "green", "darkBlue", "blue", "cyan", "lightBlue", "purple", "lightPurple", "yellow", "pink"]){
        logger[color]()
        logger.send("This text in " + color)
    }

    logger.blue()
    logger.addTimestamp("hh:mm:ss")
    logger.send("This text with timestamp")
    logger.reset()
    logger.blue()
    logger.changeName("Information")
    logger.send("This text with name")
    logger.reset()
    logger.blue()
    logger.sendTraced("This text with trace")
    logger.addTimestamp("hh:mm:ss")
    logger.changeName("Debug")
    logger.sendTraced("This text with timestamp, name and trace")

    logger.save("./log.txt", "This text in a file")
}

main()
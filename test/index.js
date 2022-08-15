async function main(){
    const Logger = require('../index.js')
    const logger = new Logger()

    logger.addTimestamp("hh:mm:ss")
    .blue("This text has a timestamp")
    .send()
    .reset()
    
    logger.changeTag("Information")
    .blue("This text has a tag")
    .send()

    logger.sendTraced("This text has a trace")

    logger.addTimestamp("hh:mm:ss")
    .yellow()
    .changeTag("Debug")
    .sendTraced("This text has a timestamp, name and trace")

    setTimeout(() =>{
        logger.send("This text has a timestamp")
    }, 1000)

    logger.red("R")
    .green("G")
    .blue("B")
    .white(" - Change as much as you want!")
    .send()
    .save("./log.txt")

    logger.rainbow("TASTE THE RAINBOW")
    .send()
}

main()
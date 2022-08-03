async function main() {
    const Logger = require('../index.js')
    const logger = new Logger("cutesy.js")


    for (color of ["black", "white", "red", "green", "yellow", "blue", "cyan", "purple"]) {
        logger.log(`[${color}]This text in ${color}`);
    }
    logger.log("[yellow]This warning text is in yellow", "WARNING");
    logger.setDateTimeFormat("HH:mm:ss");
    logger.log("[red]This error text is in red and only time", "ERROR");
    logger.setDebug(true);
    logger.logTraced("[purple]This debug text is in purple", "DEBUG");
    logger.setDebug(false);
    logger.log("[purple]This debug text should be hidden because debug is disabled", "DEBUG");
}

main()
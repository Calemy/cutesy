const dateFormat = require('./dateformat');
const logTypes = {
    INFO: '[blue]INFO[reset]',
    WARNING: '[yellow]WARNING[reset]',
    ERROR: '[red]ERROR[reset]',
    DEBUG: '[purple]DEBUG[reset]'
};

const consoleModifiers = {
    reset: '\x1b[0m',
    black: '\x1b[30m',
    white: '\x1b[37m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    purple: '\x1b[95m',
    bold: '\x1b[1m',
    underline: '\x1b[4m',
    reversed: '\x1b[7m',
    italic: '\x1b[3m',
}

module.exports = class {
    constructor(appName) {
        this.appName = appName;
        this.dateTimeFormat = "yyyy-MM-dd HH:mm:ss";
        this.debug = false;
    }

    setAppName(appName) {
        this.appName = appName;
    }

    setDateTimeFormat(dateTimeFormat) {
        this.dateTimeFormat = dateTimeFormat;
    }

    setDebug(debug) {
        this.debug = debug;
        if (debug) this.log(`Debug mode is enabled`, 'DEBUG');
    }

    logTraced(message, logType, nesting) {
        const n = nesting || 2
        const Object = {};
        try {
            Object.debug();
        } catch (ex) {
            const trace = ex.stack?.split("\n", n + 1)[n]?.split("(")[1]?.split(")")[0]
            if (!trace) this.sendTraced(message, logType, n - 1)
            this.log(message + " |-> " + trace, logType);
        }
    }

    log(message, logType = "INFO") {
        const logTypePrefix = logTypes[logType] || logType;

        if (!this.debug && logType == "DEBUG") return;

        const date = new Date();
        const dateTime = dateFormat(date, this.dateTimeFormat);

        const messageWithReplacedModifiers = message.replace(/\[(.*?)\]/g, (match, color) => {
            if (color in consoleModifiers) {
                return consoleModifiers[color];
            }
            return match;
        });
        const logTypePrefixWithReplacedModifiers = `${logTypePrefix}`.replace(/\[(.*?)\]/g, (match, color) => {
            if (color in consoleModifiers) {
                return consoleModifiers[color];
            }
            return match;
        });

        console.log(`[${this.appName} | ${dateTime}] ${consoleModifiers.bold}${logTypePrefixWithReplacedModifiers}${consoleModifiers.reset} - ${messageWithReplacedModifiers} ${consoleModifiers.reset}`);
    }
}
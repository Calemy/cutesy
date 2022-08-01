export = class Logger {
    constructor();

    addTimestamp(format: "hh:mm:ss" | "hh:mm" | "mm:ss"): Logger

    changeColor(code: number): Logger

    changeFont(code: number): Logger

    changeTag(tag: string): Logger

    save(path: string, message?: string): Logger

    send(message: string): Logger

    sendTraced(message: string, nesting?: number): Logger

    black(): Logger

    white(): Logger

    red(): Logger

    green(): Logger
    
    darkGreen(): Logger

    darkBlue(): Logger

    blue(): Logger

    cyan(): Logger

    lightBlue(): Logger

    purple(): Logger

    lightPurple(): Logger

    yellow(): Logger

    pink(): Logger

    bold(): Logger

    underline(): Logger

    reversed(): Logger

    reset(): Logger
}
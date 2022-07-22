export = class Logger {
    constructor();

    addTimestamp(format: "hh:mm:ss" | "hh:mm" | "mm:ss"): Logger

    changeColor(code: number): Logger

    changeFont(code: number): Logger

    changeName(name: string): Logger

    save(path: string, message: string | undefined): Logger

    send(message: string): Logger

    sendTraced(message: string): Logger

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
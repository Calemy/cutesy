export = class Logger {
    constructor();

    addTimestamp(format: "hh:mm:ss" | "hh:mm" | "mm:ss"): Logger

    changeColor(code: number, message?: string): Logger

    changeFont(code: number): Logger

    changeTag(tag: string): Logger

    save(path: string, message?: string): Logger

    send(message?: string): Logger

    sendTraced(message?: string, nesting?: number): Logger

    rainbow(message: string): Logger

    black(message?: string): Logger

    white(message?: string): Logger

    red(message?: string): Logger

    green(message?: string): Logger
    
    darkGreen(message?: string): Logger

    darkBlue(message?: string): Logger

    blue(message?: string): Logger

    cyan(message?: string): Logger

    purpleBlue(message?: string): Logger

    lightBlue(message?: string): Logger

    purple(message?: string): Logger

    lightPurple(message?: string): Logger

    yellow(message?: string): Logger

    pink(message?: string): Logger

    orange(message?: string): Logger

    bold(): Logger

    underline(): Logger

    reversed(): Logger

    reset(): Logger
}
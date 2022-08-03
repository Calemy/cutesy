export = class Logger {
    constructor(appName: string);
    log(message: string, logType: "INFO" | "WARNING" | "ERROR" | "DEBUG"): void;
    logTraced(message: string, logType: "INFO" | "WARNING" | "ERROR" | "DEBUG", nested: number): void;
    setDateTimeFormat(dateTimeFormat: string): void;
    setDebug(debug: boolean): void;
    setAppName(appName: string): void;
}
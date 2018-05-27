export class Logger {
    private static instance: Logger;

    private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            return new Logger();
        }

        return Logger.instance;
    }

    public log(text: string) {
        console.log(text);
    }
}

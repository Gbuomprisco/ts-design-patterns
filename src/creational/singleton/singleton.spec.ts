import { Logger } from "./singleton";

describe('Singleton', () => {
    let logger: Logger;

    beforeEach(() => {
        logger = Logger.getInstance();
    });

    it('creates one instance and one only', () => {
        const anotherLogger = Logger.getInstance();

        expect(logger).toEqual(anotherLogger);
    });

    it('logs', () => {
        expect(logger.log('')).toBe(undefined);
    });
});

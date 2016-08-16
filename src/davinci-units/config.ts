class Units {
    GITHUB: string;
    LAST_MODIFIED: string;
    NAMESPACE: string;
    VERSION: string;

    constructor() {
        this.GITHUB = 'https://github.com/geometryzen/davinci-units';
        this.LAST_MODIFIED = '2016-08-15';
        this.NAMESPACE = 'UNITS';
        this.VERSION = '1.1.0';
    }

    log(message?: any, ...optionalParams: any[]): void {
        // This should allow us to unit test and run in environments without a console.
        console.log(message)
    }

    info(message?: any, ...optionalParams: any[]): void {
        // This should allow us to unit test and run in environments without a console.
        console.info(message)
    }

    warn(message?: any, ...optionalParams: any[]): void {
        // This should allow us to unit test and run in environments without a console.
        console.warn(message)
    }

    error(message?: any, ...optionalParams: any[]): void {
        // This should allow us to unit test and run in environments without a console.
        console.error(message)
    }
}

/**
 *
 */
const config = new Units()

export default config;

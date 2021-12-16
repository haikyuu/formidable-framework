export default class Redis {
    /**
    @param {String} database
    */
    static connection(database?: string): any;
    static configure(config: any): any;
    static closeAll(): any[];
    /**
    @param {String} key
    @param {String} value
    @param {any} options
    */
    static set(key: string, value: string, options?: any): any;
    /**
    @param {String} key
    */
    static get(key: string): any;
    /**
    @param {String} key
    */
    static del(key: string): any;
    /**
    @param {String} command
    @param {String} key
    @param {String|null} value
    @param {any} nx
    */
    static command(command: string, key: string, value?: string | null, nx?: any): any;
    /**
    @param {String} database
    */
    constructor(database?: string);
}

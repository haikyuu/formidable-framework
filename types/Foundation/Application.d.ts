export default class Application {
    /**
    @param {String} notation
    @param {any} default
    */
    static getConfig(notation: string, default$?: any): any;
    /**
    @param {String} key
    @param {any} default
    */
    static getEnv(key: string, default$?: any): any;
    static env(): any;
    static get version(): any;
    /**
    @param {String} root
    */
    constructor(root: string);
    bindings: any;
    config: any;
    hooks: any;
    plugins: any;
    root: string;
    get version(): any;
    /**
    @param {Number} default
    */
    port(default$?: number): number;
    routes(): any[];
    fastify(): any;
    addHook(hook: any, handler: any): Application;
    /**
    @param {Function} plugin
    @param {Object} options
    @param {Function} handler
    */
    register(plugin: Function, options?: any, handler?: Function): Application;
    /**
    @param {Function} handler
    */
    onResponse(handler: Function): Application;
    migration(): any;
    seeder(): any;
    /**
    @param {Function} abstract
    @param {array} params
    */
    make(abstract: Function, params?: any[]): any;
    /**
    @param {Function} abstract
    @param {Function} concrete
    */
    bind(abstract: Function, concrete: Function): Application;
    /**
    @param {Boolean} distribute
    */
    cache(distribute?: boolean): any;
    /**
    @param {Kernel} kernel
    @param {Boolean} returnMode
    */
    initiate(kernel: Kernel, returnMode?: boolean): Promise<Application>;
    prepare(): Application;
    resolve(): any[];
    bootResolver(resolver: any): any;
    registerResolver(resolver: any): any;
    [Ψ__init__]($$?: any): void;
}
import Kernel from "../Http/Kernel";
declare const Ψ__init__: unique symbol;
export {};

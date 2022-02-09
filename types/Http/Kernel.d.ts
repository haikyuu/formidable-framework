export default class Kernel {
    get middleware(): any[];
    get middlewareGroups(): {};
    get routeMiddleware(): {};
    getAllMiddleware(route: any, _middleware?: any): any[];
    listen(config: any, errorHandler: any, hooks: any, plugins: any, returnMode: any): Promise<any>;
    hasRoutes(router: any, config: any): any[];
    /**
    @param {Object} route
    */
    resolveMiddleware(route: any, request: any, reply: any, config: any, _middleware?: any): Promise<any[]>;
}

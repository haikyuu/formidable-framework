export default AuthorizationException;
declare class AuthorizationException extends HttpException {
    static [$1](): typeof AuthorizationException;
    constructor(...args: any[]);
    [$1]($$?: any, ...args: any[]): void;
}
import HttpException from "../../Http/Exceptions/HttpException";
declare const $1: unique symbol;

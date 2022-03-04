export default class CorsServiceResolver extends ServiceResolver {
    /**
         * Get allowed origins.
         *
         * @oaram {String} origin
         * @returns {String[]}
         */
    /**
    *
         * Get allowed origins.
         *
         * @oaram {String} origin
         * @returns {String[]}
         
    @param {String} origin
    */
    getOrigins(origin: string): string[];
    /**
         * Check if path matches allowed path's.
         *
         * @param {FastifyRequest} request
         * @returns {Boolean}
         */
    /**
    *
         * Check if path matches allowed path's.
         *
         * @param {FastifyRequest} request
         * @returns {Boolean}
         
    @param {FastifyRequest} request
    */
    isMatchingPath(request: FastifyRequest): boolean;
    /**
         * Boot cors service resolver.
         *
         * @returns {void}
         */
    /**
    *
         * Boot cors service resolver.
         *
         * @returns {void}
         
    */
    boot(): void;
}
import ServiceResolver from "../../Support/ServiceResolver";

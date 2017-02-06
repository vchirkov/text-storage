/**
 * Created by vchirkov on 2/4/2017.
 */

/**
 * service to manage domains from background
 * @param connector {service}
 * @returns {{get: (function())}}
 */
connector.$name = 'domains';
export default function connector(connector) {
    var domainsPromise = connector('get-domains');
    return {
        /**
         * @returns {Promise} - resolves domain list
         */
        get: () => {
            return domainsPromise;
        }
    }
}
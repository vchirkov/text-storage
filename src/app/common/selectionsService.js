/**
 * Created by vchirkov on 2/4/2017.
 */

/**
 * service to manage selections from background
 * @param connector {service}
 * @returns {{get: (function())}}
 */
connector.$name = 'selections';
export default function connector(connector) {
    return {
        /**
         * @returns {Promise} - resolves selection list
         */
        get: (topic, domain) => {
            return connector('get-selections', {topic, domain});
        }
    }
}
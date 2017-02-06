/**
 * Created by vlad.chirkov on 3.2.17.
 */
/**
 * service to manage topics from background
 * @param connector {service}
 * @returns {{get: (function())}}
 */
connector.$name = 'topics';
export default function connector(connector) {
    var topicsPromise = connector('get-topics');
    return {
        /**
         * @returns {Promise} - resolves t opiclist
         */
        get: () => {
            return topicsPromise;
        }
    }
}
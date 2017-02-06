/**
 * Created by vlad.chirkov on 2.2.17.
 */

//TODO make connector a lib, extend functionality, move to separate repository
/**
 * service to communicate with background
 * @param $q - Angular promises
 * @returns {Promise}
 */
connector.$name = 'connector';
export default function connector($q) {
    return (type, data) => {
        return $q((res) => chrome.runtime.sendMessage({type, data}, res));
    }
}
/**
 * Created by vlad.chirkov on 2.2.17.
 */
connector.$name = 'connector';
export default function connector($q) {
    return (type, data) => {
        return $q((res) => chrome.runtime.sendMessage({type, data}, res));
    }
}
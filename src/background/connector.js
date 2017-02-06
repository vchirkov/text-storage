/**
 * Created by vlad.chirkov on 1.2.17.
 */
import EventEmitter from 'events';
import {noop} from 'lodash';

/**
 * Connector class is used to communicate with content, popup, options pages.
 * Extends EventEmitter
 */
class Connector extends EventEmitter {
    /**
     * no parameters, after instance is inited,
     * starts to listen to messages to background
     */
    constructor() {
        super();
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            super.emit(request.type, request.data, sender, sendResponse);
            return true;
        });
    }

    /**
     *
     * @param tab:int - tab index
     * @param type:string - type of message
     * @param data:json - data to pass to listener
     * @param cb:function - callback on result
     */
    send(tab, type, data, cb) {
        chrome.tabs.sendMessage(tab, {
            type,
            data
        }, cb || noop);
    }
}
// it makes sence to have only one Connector instance for whole background,
// but can be changed in future.
export default new Connector();
/**
 * Created by vlad.chirkov on 1.2.17.
 */
import EventEmitter from 'events';
import {noop} from 'lodash';

class Connector extends EventEmitter {
    constructor() {
        super();
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            super.emit(request.type, request.data, sender, sendResponse);
            return true;
        });
    }

    send(tab, type, data, cb) {
        chrome.tabs.sendMessage(tab, {
            type,
            data
        }, cb || noop);
    }
}


export default new Connector();
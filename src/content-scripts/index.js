/**
 * Created by vlad.chirkov on 31.1.17.
 */

import parserFactory from './parserFactory';
import successTrigger from './successTrigger/successTrigger';

const S_KEY_CODE = 83;
const parser = new parserFactory();// load new parser

/**
 * start listening ot keydown events
 * as soon as we meet 'alt+s' try to get and store selection
 */
document.body.addEventListener('keydown', (e) => {
    // we listen only to 'alt+s' combination
    if (e.keyCode !== S_KEY_CODE || !e.altKey) {
        return;
    }

    try {
        const parsedSelection = parser(window.getSelection());
        if (parsedSelection) {
            chrome.runtime.sendMessage({
                type: 'save-selection',
                data: parsedSelection
            }, () => {
                successTrigger();
            });
        }
    } catch (e) {

    }

}, true);// hacky-hack to use capturing (not bubbling) and avoid stopPropagation
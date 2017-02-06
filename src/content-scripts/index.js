/**
 * Created by vlad.chirkov on 31.1.17.
 */

import parseSelection from './parseSelection';

const S_KEY_CODE = 83;

document.body.addEventListener('keydown', (e) => {
    // we listen only to 'alt+s' combination
    if (e.keyCode !== S_KEY_CODE || !e.altKey) {
        return;
    }

    try {
        const parsedSelection = parseSelection(window.getSelection());
        if (parsedSelection) {
            chrome.runtime.sendMessage({
                type: 'save-selection',
                data: parsedSelection
            });
        }
    } catch (e) {

    }

}, true);// hacky-hack to use capturing (not bubbling) and avoid stopPropagation
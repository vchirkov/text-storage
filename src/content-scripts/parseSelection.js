/**
 * Created by vlad.chirkov on 31.1.17.
 */

import {names as cssProps} from './resources/json/commonCssProps.json';

/**
 * Save all styles, that differ from default
 * save images
 *
 * @param selection{Selection}: selection object
 * @returns {string}: parsed HTML
 */
export default function (selection) {
    if (selection.isCollapsed) {
        return;
    }
    return fillNewDomTree(selection).outerHTML;
}

/**
 *
 * @param selection{Selection}
 * @returns {Node}
 */
function fillNewDomTree(selection) {
    let rootFiller = selection.getRangeAt(0).commonAncestorContainer;                                       // get common ancestor
    let rootFilled = rootFiller.cloneNode(false);                                                           // and copy it to fill later
    if (rootFiller === selection.baseNode && rootFiller === selection.extentNode) {                         // it might be, that only text inside one text node was copied
        rootFilled.nodeValue = rootFiller.nodeValue.substring(selection.baseOffset, selection.extentOffset);// then fill filled root with this text
        rootFilled = rootFilled.parentNode;                                                                 // and take it's parent to set css
        inlineComputedStyle(rootFiller, rootFilled);
    } else {
        rootFilled = fillWithChildrenFromSelection(selection, rootFiller, rootFilled);
    }
    inlineComputedStyle(rootFiller, rootFilled);
    return rootFilled;                                                                                      // in case structure is complex run recursively thorough root children
}

/**
 * recursive run through elements
 * to clone it's content according to selection ranges
 *
 * @param selection{Selection}
 * @param filler{Node}
 * @param filled{Node}
 * @returns {Node}
 */
function fillWithChildrenFromSelection(selection, filler, filled) {
    filler.childNodes.forEach((node) => {                                                                   // for all child nodes
        if (selection.containsNode(node, true)) {                                                           // if this child is in selection
            let fillNode = node.cloneNode(false);                                                           // make it's copy
            if (node.childNodes && node.childNodes.length) {                                                // and check if it's not text or empty
                fillWithChildrenFromSelection(selection, node, fillNode);                                   // in case it's not, recursevly run same stuff
            } else if (node === selection.baseNode) {                                                       // in case it's partially copied text, partially copy it's value
                fillNode.nodeValue = node.nodeValue.substring(selection.baseOffset, node.nodeValue.length);
            } else if (node === selection.extentNode) {                                                     // same here, but, when it's end of selection
                fillNode.nodeValue = node.nodeValue.substring(0, selection.extentOffset);
            }
            inlineComputedStyle(node, fillNode);                                                            // fill node with styles from source
            filled.appendChild(fillNode);                                                                   // and append to parent
        }
    });
    return filled;
}

/**
 * Fill cloned node with computed styles from source node
 * Filled based on external list of css properties
 *
 * @param filler{Node}
 * @param filled{Node}
 * @returns {Node}
 */
function inlineComputedStyle(filler, filled) {
    if (filler.nodeType === Node.ELEMENT_NODE) {                // if element, not text node
        let styleDeclaration = window.getComputedStyle(filler); // get computed styles
        cssProps.forEach((prop) => {                            // and run through most commonly used to set it to new node
            filled.style[prop] = styleDeclaration[prop];
        });
    }
    return filled;
}
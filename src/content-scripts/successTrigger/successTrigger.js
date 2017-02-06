import "./successTrigger.less";

const cssClass= 'non-sense-class-v2h7v6H21V10';
const visibilityAttr= 'visible-v2h7v6H21V10';

let elem = document.createElement('div');
elem.className = cssClass;
document.body.appendChild(elem);

export default function () {
    elem.setAttribute(visibilityAttr, '');
    setTimeout(() => {elem.removeAttribute(visibilityAttr)});
}
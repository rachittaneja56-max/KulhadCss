import { parseClass } from './parser.js';

export function applyStyles(element) {
    let element_classes = Array.from(element.classList);
    
    element_classes.forEach(cls => {
        const styleObject = parseClass(cls);
        if (styleObject) {
            Object.assign(element.style, styleObject);
        }
    });
}

export function scanDom() {
    const elements_list = Array.from(document.querySelectorAll('[class]'));
    elements_list.forEach(element => applyStyles(element));
}
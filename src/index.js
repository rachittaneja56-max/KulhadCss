import { scanDom } from './applier.js';

if (typeof window !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
        scanDom();
    })
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    })
    scanDom();
    console.log("KulhadCSS: Styles brewed successfully! 🏺☕");

}
export { scanDom };
import { scanDom } from './applier.js';
if (typeof window !== 'undefined') {
    
    window.addEventListener('DOMContentLoaded', () => {
        scanDom();
        console.log("KulhadCSS: Styles brewed successfully! 🏺☕");
    });
}
export { scanDom };
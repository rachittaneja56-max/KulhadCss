const SCALE = 4;

const staticStyles = {
    "milkar": { "display": "flex" },
    "beech": { 
        "display": "flex", 
        "justifyContent": "center", 
        "alignItems": "center" 
    }
};

export function parseClass(className) {
    if (staticStyles[className]) return staticStyles[className];
    const parts = className.split("-");
    if (parts.length !== 2) return null;
    let [prefix, value] = parts;
    let numValue = Number(value);
    if (isNaN(numValue)) return null;
    prefix = prefix.toLowerCase();
    switch (prefix) {
        case "malai": 
            return { 
                "padding": `${numValue * SCALE}px`
            };
        case "doori": 
            return { 
                "margin": `${numValue * SCALE}px`
            };
        case "ghumaav": 
            return {
                 "borderRadius": `${numValue * SCALE}px`
             };
        default:
            return null;
    }
}
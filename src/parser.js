const SCALE = 4;

const PARDAS = {
    mobile: "(min-width: 640px)",
    tab: "(min-width: 1024px)",
    bade: "(min-width: 1280px)"
};

export function parseKulhadClass(className) {
    const staticStyles = {
        "milkar": { display: "flex" },
        "jaali-hai": { display: "grid" },
        "beech": { display: "flex", justifyContent: "center", alignItems: "center" },
        "gayab": { display: "none" },
        "block": { display: "block" },
        "inline": { display: "inline" },
        "ungli-haan": { cursor: "pointer" },
        "chuna-mana": { pointerEvents: "none" },
        "likhai-neeche": { textDecoration: "underline" },
        "likhai-kaato": { textDecoration: "line-through" },
        "likhai-itallic": { fontStyle: "italic" },
        "likhai-seedhi": { fontStyle: "normal" },
        "chipka-hua": { position: "sticky", top: 0 },
        "poora-parda": { width: "100vw", height: "100vh" },
        "shish-mahal": { backdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.1)" }
    };

    if (staticStyles[className]) return staticStyles[className];
    const parts = className.split("-");
    const prefix = parts.slice(0, -1).join("-").toLowerCase();
    const value = parts[parts.length - 1];
    if (!prefix || !value) return null;
    const numValue = Number(value);
    const v = value.toLowerCase();
    const rukhMap = { "baayein": "left", "beech": "center", "daayein": "right", "patt-se": "justify" };
    const vazanMap = { "halka": "300", "theek": "400", "bhaari": "700", "zyada": "900" };
    const milapMap = { "beech": "center", "door": "space-between", "aas-paas": "space-around", "chipak-ke": "flex-start", "ant-mein": "flex-end" };
    const khadaMilapMap = { "beech": "center", "chipak-ke": "flex-start", "neeche": "flex-end", "fail-ke": "stretch" };
    const raftaarMap = { "tez": "150ms", "theek": "350ms", "haule": "800ms", "ekdum-slow": "2000ms" };
    const ungliMap = { "haan": "pointer", "na": "not-allowed", "likhai": "text", "rok-do": "wait", "khisko": "move" };
    const shakalMap = { "square": "1/1", "video": "16/9", "khada": "9/16", "photo": "4/3" };
    const fitMap = { "bhar-do": "cover", "beech-mein": "contain", "kheench-ke": "fill" };

    switch (prefix) {
        case "likhai-size": return { fontSize: isNaN(numValue) ? v : `${numValue}px` };
        case "likhai-vazan": return { fontWeight: vazanMap[v] || v };
        case "likhai-rang": return { color: v };
        case "likhai-rukh": return { textAlign: rukhMap[v] || v };
        case "likhai-line": return { lineHeight: isNaN(numValue) ? v : numValue };
        case "likhai-space": return { letterSpacing: `${numValue}px` };
        case "likhai-badi": return { textTransform: "uppercase" };
        case "likhai-choti": return { textTransform: "lowercase" };
        case "ghera": return { padding: `${numValue * SCALE}px` };
        case "ghera-upar": return { paddingTop: `${numValue * SCALE}px` };
        case "ghera-neeche": return { paddingBottom: `${numValue * SCALE}px` };
        case "ghera-baayein": return { paddingLeft: `${numValue * SCALE}px` };
        case "ghera-daayein": return { paddingRight: `${numValue * SCALE}px` };
        case "ghera-x": return { paddingLeft: `${numValue * SCALE}px`, paddingRight: `${numValue * SCALE}px` };
        case "ghera-y": return { paddingTop: `${numValue * SCALE}px`, paddingBottom: `${numValue * SCALE}px` };
        case "doori": return { margin: `${numValue * SCALE}px` };
        case "doori-upar": return { marginTop: `${numValue * SCALE}px` };
        case "doori-neeche": return { marginBottom: `${numValue * SCALE}px` };
        case "doori-baayein": return { marginLeft: `${numValue * SCALE}px` };
        case "doori-daayein": return { marginRight: `${numValue * SCALE}px` };
        case "doori-x": return { marginLeft: `${numValue * SCALE}px`, marginRight: `${numValue * SCALE}px` };
        case "doori-y": return { marginTop: `${numValue * SCALE}px`, marginBottom: `${numValue * SCALE}px` };
        case "doori-auto": return { margin: "auto" };
        case "rang-piche": return { backgroundColor: v };
        case "lakheer": return { borderWidth: `${numValue}px`, borderStyle: "solid" };
        case "lakheer-rang": return { borderColor: v };
        case "lakheer-style": return { borderStyle: v };
        case "ghumaav": return { borderRadius: v === "gol" ? "9999px" : `${numValue * SCALE}px` };
        case "ghumaav-upar": return { borderTopLeftRadius: `${numValue * SCALE}px`, borderTopRightRadius: `${numValue * SCALE}px` };
        case "ghumaav-neeche": return { borderBottomLeftRadius: `${numValue * SCALE}px`, borderBottomRightRadius: `${numValue * SCALE}px` };
        case "faasla": return { gap: `${numValue * SCALE}px` };
        case "faasla-x": return { columnGap: `${numValue * SCALE}px` };
        case "faasla-y": return { rowGap: `${numValue * SCALE}px` };
        case "dhancha": return { flexDirection: v === "khada" ? "column" : "row" };
        case "milap-kaise": return { justifyContent: milapMap[v] || v };
        case "khada-milap": return { alignItems: khadaMilapMap[v] || v };
        case "lapait": return { flexWrap: v === "haan" ? "wrap" : "nowrap" };
        case "khali-jagah": return { flexGrow: numValue };
        case "dabna": return { flexShrink: numValue };
        case "jaali-cols": return { gridTemplateColumns: `repeat(${numValue}, minmax(0, 1fr))` };
        case "jaali-rows": return { gridTemplateRows: `repeat(${numValue}, minmax(0, 1fr))` };
        case "chaudaai": return { width: v === "poora" ? "100%" : (v === "parda" ? "100vw" : `${numValue * SCALE}px`) };
        case "chaudaai-max": return { maxWidth: v === "poora" ? "100%" : `${numValue * SCALE}px` };
        case "lambai": return { height: v === "poora" ? "100%" : (v === "parda" ? "100vh" : `${numValue * SCALE}px`) };
        case "lambai-max": return { maxHeight: v === "poora" ? "100%" : `${numValue * SCALE}px` };
        case "tikaana": return { position: v };
        case "upar": return { top: `${numValue * SCALE}px` };
        case "neeche": return { bottom: `${numValue * SCALE}px` };
        case "baayein": return { left: `${numValue * SCALE}px` };
        case "daayein": return { right: `${numValue * SCALE}px` };
        case "uunchai": return { zIndex: numValue };
        case "parchaayi": return { boxShadow: `0px ${numValue}px ${numValue * 3}px rgba(0,0,0,${v === "halki" ? 0.1 : 0.25})` };
        case "dhundhla": return { opacity: numValue / 10 };
        case "saaf-saaf": return { filter: `blur(${numValue}px)` };
        case "pakaayi": return { filter: `brightness(${numValue / 10})` };
        case "shakal": return { aspectRatio: shakalMap[v] || v };
        case "fit-kaise": return { objectFit: fitMap[v] || v };
        case "ungli": return { cursor: ungliMap[v] || v };
        case "raftaar": return { transition: `all ${raftaarMap[v] || v} ease-in-out` };
        case "had-se-bahar": return { overflow: v === "chupao" ? "hidden" : (v === "ghumaao" ? "auto" : v) };
        case "had-se-bahar-x": return { overflowX: v === "chupao" ? "hidden" : "auto" };
        case "had-se-bahar-y": return { overflowY: v === "chupao" ? "hidden" : "auto" };
        default: return null;
    }
}
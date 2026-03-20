# 🏺 KulhadCSS

A **Kadak** utility-first CSS engine brewed with pure Vanilla JS.

Apply layout, spacing, and styling beautifully using intuitive Indian terminology (Desi CSS)! KulhadCSS traverses your DOM, parsing classnames like `ghera-10` and `ghumaav-5` and rendering them instantly—without any CSS file or preprocessors.

## Installation

**Via NPM:**
```bash
npm install kulhadcss
```

**Via CDN (JSDelivr) in browser:**
```html
<script type="module">
  import { scanDom } from 'https://cdn.jsdelivr.net/npm/kulhadcss/src/index.js';
</script>
```

## How It Works

KulhadCSS runs naturally in the browser without any bundler overhead:
1. **Parser:** Deconstructs unique class names (e.g., `ghera-10` into `padding: 40px`).
2. **Applier:** Scans through the DOM elements and applies the generated inline styles to the `style` object directly.
3. **Auto-Initialization:** It automatically listens to the `DOMContentLoaded` event, so all your styled elements are beautifully rendered once HTML is loaded.

---

## The Desi Dictionary

All dynamic utilities in KulhadCSS follow a strict 4-pixel base scale:
> **1 unit = 4px**

### Layout & Display Utilities (Static)

| Class Name | Equivalent CSS | Description |
|---|---|---|
| `milkar` | `display: flex;` | Initializes a flex container |
| `jaali-hai` | `display: grid;` | Initializes a grid container |
| `beech` | `display: flex; justify-content: center; align-items: center;` | Perfectly centers the content |
| `gayab` | `display: none;` | Hides the element |
| `block` | `display: block;` | Block level element |
| `inline` | `display: inline;` | Inline element |
| `poora-parda` | `width: 100vw; height: 100vh;` | Takes the full viewport |
| `chipka-hua` | `position: sticky; top: 0;` | Sticky header |
| `shish-mahal` | `backdrop-filter: blur(12px)...` | Glassmorphism effect |

### Typography (Likhai)

| Class Prefix | Example | CSS Result | Support Values / Calculation |
|---|---|---|---|
| `likhai-size-{n}` | `likhai-size-16` | `font-size: 16px;` | Font size in px |
| `likhai-vazan-{v}` | `likhai-vazan-bhaari` | `font-weight: 700;` | `halka` (300), `theek` (400), `bhaari` (700), `zyada` (900) |
| `likhai-rang-{v}` | `likhai-rang-red` | `color: red;` | Any valid CSS color |
| `likhai-rukh-{v}` | `likhai-rukh-beech` | `text-align: center;` | `baayein` (left), `beech` (center), `daayein` (right), `patt-se` (justify) |
| `likhai-line-{n}` | `likhai-line-2` | `line-height: 2;` | Line height |
| `likhai-badi` | `likhai-badi` | `text-transform: uppercase;` | Uppercase |
| `likhai-choti`| `likhai-choti`| `text-transform: lowercase;` | Lowercase |
| `likhai-neeche`| `likhai-neeche`| `text-decoration: underline;`| Underline text |
| `likhai-kaato`| `likhai-kaato`| `text-decoration: line-through;`| Strikethrough text |
| `likhai-itallic`| `likhai-itallic`| `font-style: italic;`| Italic text |
| `likhai-seedhi`| `likhai-seedhi`| `font-style: normal;`| Normal text |

### Spacing (Ghera & Doori)

Padding (`ghera`) and Margin (`doori`) use the 1 unit = 4px multiplier.

| Feature | Prefix | Example | Calculation | CSS Result |
|---|---|---|---|---|
| Padding | `ghera-{n}` | `ghera-4` | 4 × 4px | `padding: 16px;` |
| Padding Top | `ghera-upar-{n}` | `ghera-upar-2` | 2 × 4px | `padding-top: 8px;` |
| Padding X | `ghera-x-{n}` | `ghera-x-5` | 5 × 4px | `padding-left: 20px; padding-right: 20px;` |
| Margin | `doori-{n}` | `doori-8` | 8 × 4px | `margin: 32px;` |
| Margin Auto | `doori-auto` | `doori-auto` | - | `margin: auto;` |

*(Available directional prefixes: `upar` (top), `neeche` (bottom), `baayein` (left), `daayein` (right), `x` (horizontal), `y` (vertical))*

### Backgrounds & Borders

| Class Prefix | Example | CSS Result | Note |
|---|---|---|---|
| `rang-piche-{v}` | `rang-piche-blue` | `background-color: blue;` | Any valid color |
| `ghumaav-{n}` | `ghumaav-5` | `border-radius: 20px;` | 5 × 4px. Use `gol` for fully rounded (`9999px`) |
| `lakheer-{n}` | `lakheer-2` | `border: 2px solid;` | Sets solid border with width |
| `lakheer-rang-{v}`| `lakheer-rang-red` | `border-color: red;` | Sets border color |
| `lakheer-style-{v}`| `lakheer-style-dashed`| `border-style: dashed;` | Sets border style |

### Flexbox & Grid

| Class Prefix | Example | CSS Result | Support Values |
|---|---|---|---|
| `dhancha-{v}` | `dhancha-khada` | `flex-direction: column;` | `khada` (column), row (default) |
| `faasla-{n}` | `faasla-4` | `gap: 16px;` | 4 × 4px |
| `milap-kaise-{v}`| `milap-kaise-beech` | `justify-content: center;`| `beech`, `door`, `aas-paas`, `chipak-ke`, `ant-mein` |
| `khada-milap-{v}`| `khada-milap-fail-ke`| `align-items: stretch;` | `beech`, `chipak-ke`, `neeche`, `fail-ke` |
| `lapait-{v}` | `lapait-haan` | `flex-wrap: wrap;` | `haan` (wrap), nowrap |
| `khali-jagah-{n}`| `khali-jagah-1`| `flex-grow: 1;` | Flex grow value |
| `dabna-{n}`| `dabna-0`| `flex-shrink: 0;` | Flex shrink value |
| `jaali-cols-{n}` | `jaali-cols-3` | `grid-template-columns: repeat(3, ...)`| Grid columns |
| `jaali-rows-{n}` | `jaali-rows-2` | `grid-template-rows: repeat(2, ...)`| Grid rows |

### Sizing

| Class Prefix | Example | CSS Result | Note |
|---|---|---|---|
| `chaudaai-{n}` | `chaudaai-10` | `width: 40px;` | Multiply by 4px. Use `poora` (100%) or `parda` (100vw) |
| `chaudaai-max-{n}`| `chaudaai-max-poora`| `max-width: 100%;`| Max Width |
| `lambai-{n}` | `lambai-20` | `height: 80px;` | Multiply by 4px. Use `poora` (100%) or `parda` (100vh) |
| `lambai-max-{n}` | `lambai-max-poora` | `max-height: 100%;` | Max Height |

### Effects & Interactive

| Class Prefix | Example | CSS Result | Explanation |
|---|---|---|---|
| `parchaayi-{n}` | `parchaayi-4` | `box-shadow: ...` | Box shadow. Append `-halki` for light shadow. |
| `dhundhla-{n}` | `dhundhla-5` | `opacity: 0.5;` | Divides n by 10 for opacity |
| `saaf-saaf-{n}`| `saaf-saaf-10` | `filter: blur(10px);`| Blur effect |
| `pakaayi-{n}`| `pakaayi-15` | `filter: brightness(1.5);`| Brightness effect |
| `shakal-{v}` | `shakal-video` | `aspect-ratio: 16/9;` | Aspect ratio: `square` (1/1), `video` (16/9), `khada` (9/16), `photo` (4/3) |
| `fit-kaise-{v}`| `fit-kaise-kheench-ke`| `object-fit: fill;`| Object fit: `bhar-do` (cover), `beech-mein` (contain), `kheench-ke` (fill) |
| `ungli-{v}` | `ungli-haan` | `cursor: pointer;` | Cursors: `haan`, `na`, `likhai`, `rok-do`, `khisko` |
| `raftaar-{v}` | `raftaar-tez` | `transition: all 150ms...`| Transition speeds: `tez` (150ms), `theek` (350ms), `haule` (800ms), `ekdum-slow` (2s) |
| `had-se-bahar-{v}`| `had-se-bahar-chupao`| `overflow: hidden;` | Overflow: `chupao` (hidden), `ghumaao` (auto) |
| `tikaana-{v}` | `tikaana-absolute` | `position: absolute;` | Position (absolute, relative, fixed, etc.) |
| `uunchai-{n}` | `uunchai-50` | `z-index: 50;` | Specifies z-index |

*(Position directions supported: `upar` (top), `neeche` (bottom), `baayein` (left), `daayein` (right))*

---

## Example Usage

Here is a quick example showcasing how you can build UIs with KulhadCSS!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>KulhadCSS Demo</title>
    <script type="module">
        import { scanDom } from 'https://cdn.jsdelivr.net/npm/kulhadcss/src/index.js';
    </script>
</head>
<body style="background: #fdf5e6; margin: 0; min-height: 100vh;" class="beech">
    <div class="milkar dhancha-khada beech ghera-10 ghumaav-5 parchaayi-2" style="background: #8b4513; color: white;">
        <h1 class="doori-neeche-2 likhai-vazan-bhaari">🏺 KulhadCSS is Kadak!</h1>
        <p class="likhai-size-14 dhundhla-8">Styling is now desi & simple.</p>
        <button class="doori-upar-4 ghera-x-6 ghera-y-2 ghumaav-gol rang-piche-white likhai-rang-black ungli-haan raftaar-tez">
            Piyo!
        </button>
    </div>
</body>
</html>
```

## License
[ISC](https://opensource.org/licenses/ISC) © Rachit

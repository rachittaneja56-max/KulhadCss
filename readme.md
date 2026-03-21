# KulhadCSS

A lightweight, utility-first CSS framework natively powered by Vanilla JavaScript. 
KulhadCSS offers a unique Hindi/Hinglish nomenclature for styling web elements without the need for pre-compilers or build steps.

## Features

- **Intuitive Desi Utility Classes**: Apply styles directly in your HTML using a familiar vocabulary.
- **Dynamic Property Evaluation**: Values appended to class names are evaluated in real-time. E.g., `doori-3` applies a 12px margin dynamically.
- **Zero Build Step Configuration**: Import the library directly in the browser; no PostCSS, Webpack, or Node environment required during runtime.
- **Real-time DOM Watcher**: Automatically observes DOM changes via `MutationObserver` to ensure newly added elements are instantly styled.

## Installation

Install the package using your preferred package manager:

```bash
npm install kulhadcss
```

---

## Quick Start

### HTML/Vanilla JS Usage

Import the package in your entry point. Upon loading, the library will scan the DOM and set up the observer system to listen for UI changes.

```javascript
import 'kulhadcss';
```

Alternatively, you can manually invoke the parsing process on your document tree:

```javascript
import { scanDom } from 'kulhadcss';

// Manually process all elements with a class attribute
scanDom();
```

Write your structural templates by combining these class strings:

```html
<div class="milkar beech ghera-4 rang-piche-grey dhancha-khada parchaayi-halki ghumaav-2">
  <h1 class="likhai-size-32 likhai-vazan-bhaari likhai-rang-white">Welcome to KulhadCSS</h1>
  <p class="doori-upar-2 likhai-rang-white">A modern framework with a desi touch.</p>
</div>
```

### React Usage

KulhadCSS works seamlessly with React and other modern frameworks. Just import the library at the root of your application (e.g., `main.jsx` or `App.jsx`) and use the utility strings in the `className` attribute. Because of the built-in `MutationObserver`, dynamic component renders will be styled automatically.

**`main.jsx`**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'kulhadcss'; // Import it once here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**`App.jsx`**
```jsx
export default function App() {
  return (
    <div className="milkar beech poora-parda rang-piche-black dhancha-khada">
      <div className="ghera-8 ghumaav-4 shish-mahal parchaayi-5">
        <h1 className="likhai-size-40 likhai-vazan-zyada likhai-rang-white likhai-rukh-beech">
          React + KulhadCSS
        </h1>
        <button className="doori-upar-4 ghera-x-6 ghera-y-2 rang-piche-blue likhai-rang-white ghumaav-gol ungli-haan raftaar-theek dhundhla-9">
          Click Me
        </button>
      </div>
    </div>
  );
}
```

---

## API Reference

*Note: All numeric dimensional utilities (padding, margin, width, height, positioning, gaps) are evaluated by multiplying the appended value by `4px`.*

### Static Utilities

| Class Name | CSS Equivalent | Description |
|---|---|---|
| `milkar` | `display: flex` | Establishes a flex container. |
| `jaali-hai` | `display: grid` | Establishes a grid container. |
| `beech` | `display: flex; justify-content: center; align-items: center` | Quick flex centering utility. |
| `gayab` | `display: none` | Hides the element from the document flow. |
| `block` | `display: block` | Sets block display. |
| `inline` | `display: inline` | Sets inline display. |
| `ungli-haan` | `cursor: pointer` | Sets a pointer cursor. |
| `chuna-mana` | `pointer-events: none` | Disables pointer events interactions. |
| `likhai-neeche` | `text-decoration: underline` | Applies underline to text. |
| `likhai-kaato` | `text-decoration: line-through` | Applies a strikethrough. |
| `likhai-itallic` | `font-style: italic` | Italicizes the text. |
| `likhai-seedhi` | `font-style: normal` | Resets to normal font style. |
| `chipka-hua` | `position: sticky; top: 0` | Creates a sticky positioned element. |
| `poora-parda` | `width: 100vw; height: 100vh` | Covers the full viewport dimensions. |
| `shish-mahal` | `backdrop-filter: blur(12px); background-color: rgba(255,255,255,0.1)` | Renders a frosted glassmorphism effect. |

### Typography (`likhai`)

| Pattern | Value Options | Example | CSS Equivalent |
|---|---|---|---|
| `likhai-size-{val}` | `{number}` (px) or `{string}` | `likhai-size-24` | `font-size: 24px` |
| `likhai-vazan-{val}` | `halka`, `theek`, `bhaari`, `zyada` | `likhai-vazan-bhaari` | `font-weight: 700` |
| `likhai-rang-{color}` | Standard CSS color names/hex | `likhai-rang-red` | `color: red` |
| `likhai-rukh-{val}` | `baayein`, `beech`, `daayein`, `patt-se` | `likhai-rukh-beech` | `text-align: center` |
| `likhai-line-{val}` | `{number}` | `likhai-line-2` | `line-height: 2` |
| `likhai-space-{val}` | `{number}` | `likhai-space-1` | `letter-spacing: 1px` |
| `likhai-badi` | N/A | `likhai-badi` | `text-transform: uppercase` |
| `likhai-choti` | N/A | `likhai-choti` | `text-transform: lowercase` |

### Spacing (Padding & Margin - Value x 4px)

| Type | Uniform All Sides | Vertical (Y) | Horizontal (X) | Top / Bottom / Left / Right |
|---|---|---|---|---|
| **Padding (`ghera`)** | `ghera-{val}` | `ghera-y-{val}` | `ghera-x-{val}` | `ghera-upar-{val}`, `ghera-neeche-{val}`, `ghera-baayein-{val}`, `ghera-daayein-{val}` |
| **Margin (`doori`)** | `doori-{val}` | `doori-y-{val}` | `doori-x-{val}` | `doori-upar-{val}`, `doori-neeche-{val}`, `doori-baayein-{val}`, `doori-daayein-{val}` |

*Note: For margins, `doori-auto` is available which evaluates to `margin: auto;`.*

### Flexbox & Grid Configuration

| Pattern | Value Options | Example | CSS Equivalent |
|---|---|---|---|
| `dhancha-{val}` | `khada`, `{row/etc}` | `dhancha-khada` | `flex-direction: column` |
| `faasla-{val}` | `{number}` (gap x 4px) | `faasla-4` | `gap: 16px` |
| `faasla-x-{val}` | `{number}` | `faasla-x-2` | `column-gap: 8px` |
| `faasla-y-{val}` | `{number}` | `faasla-y-3` | `row-gap: 12px` |
| `milap-kaise-{val}` | `beech`, `door`, `aas-paas`, `chipak-ke`, `ant-mein` | `milap-kaise-door` | `justify-content: space-between` |
| `khada-milap-{val}` | `beech`, `chipak-ke`, `neeche`, `fail-ke` | `khada-milap-fail-ke` | `align-items: stretch` |
| `lapait-{val}` | `haan`, `na` | `lapait-haan` | `flex-wrap: wrap` |
| `khali-jagah-{val}`| `{number}` | `khali-jagah-1` | `flex-grow: 1` |
| `dabna-{val}` | `{number}` | `dabna-0` | `flex-shrink: 0` |
| `jaali-cols-{val}` | `{number}` | `jaali-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr))` |
| `jaali-rows-{val}` | `{number}` | `jaali-rows-2` | `grid-template-rows: repeat(2, minmax(0, 1fr))` |

### Dimensions & Sizing

| Pattern | Value Options | Example | CSS Equivalent |
|---|---|---|---|
| `chaudaai-{val}` | `poora`, `parda`, `{number}` | `chaudaai-poora` | `width: 100%` |
| `chaudaai-max-{val}`| `poora`, `{number}` | `chaudaai-max-32` | `max-width: 128px` |
| `lambai-{val}` | `poora`, `parda`, `{number}` | `lambai-parda` | `height: 100vh` |
| `lambai-max-{val}` | `poora`, `{number}` | `lambai-max-poora`| `max-height: 100%` |

### Borders & Backgrounds

| Pattern | Value Options | Example | CSS Equivalent |
|---|---|---|---|
| `rang-piche-{color}` | CSS color string | `rang-piche-black` | `background-color: black` |
| `lakheer-{val}` | `{number}` (px) | `lakheer-2` | `border-width: 2px; border-style: solid` |
| `lakheer-rang-{clr}`| CSS color string | `lakheer-rang-red` | `border-color: red` |
| `lakheer-style-{st}`| `solid`, `dashed`, etc. | `lakheer-style-dashed`| `border-style: dashed` |
| `ghumaav-{val}` | `gol`, `{number}` (x 4px) | `ghumaav-gol` | `border-radius: 9999px` |
| `ghumaav-upar-{val}`| `{number}` (x 4px) | `ghumaav-upar-2` | `border-top-radius: 8px` |
| `ghumaav-neeche-{v}`| `{number}` (x 4px) | `ghumaav-neeche-4`| `border-bottom-radius: 16px` |

### Positioning Engine

| Pattern | Value Options | Example | CSS Equivalent |
|---|---|---|---|
| `tikaana-{val}` | `absolute`, `relative`, `fixed`, `sticky` | `tikaana-absolute` | `position: absolute` |
| `upar-{val}` | `{number}` (x 4px) | `upar-4` | `top: 16px` |
| `neeche-{val}` | `{number}` (x 4px) | `neeche-0` | `bottom: 0px` |
| `baayein-{val}` | `{number}` (x 4px) | `baayein-2` | `left: 8px` |
| `daayein-{val}` | `{number}` (x 4px) | `daayein-2` | `right: 8px` |
| `uunchai-{val}` | `{number}` | `uunchai-50` | `z-index: 50` |

### Visual Render Effects

| Pattern | Value Options | Example | CSS Equivalent |
|---|---|---|---|
| `parchaayi-{val}` | `halki`, `{number}` | `parchaayi-2` | `box-shadow: 0px 2px 6px rgba(0,0,0,0.25)` |
| `dhundhla-{val}` | `{number}` (/ 10) | `dhundhla-5` | `opacity: 0.5` |
| `saaf-saaf-{val}` | `{number}` (px) | `saaf-saaf-10` | `filter: blur(10px)` |
| `pakaayi-{val}` | `{number}` (/ 10) | `pakaayi-8` | `filter: brightness(0.8)` |
| `shakal-{val}` | `square`, `video`, `khada`, `photo` | `shakal-video` | `aspect-ratio: 16 / 9` |
| `fit-kaise-{val}` | `bhar-do`, `beech-mein`, `kheench-ke` | `fit-kaise-bhar-do` | `object-fit: cover` |

### Interactivity & Mechanics

| Pattern | Value Options | Example | CSS Equivalent |
|---|---|---|---|
| `raftaar-{val}` | `tez` (150ms), `theek` (350ms), `haule` (800ms), `ekdum-slow` (2s) | `raftaar-theek` | `transition: all 350ms ease-in-out` |
| `had-se-bahar-{val}`| `chupao` (hidden), `ghumaao` (auto) | `had-se-bahar-chupao` | `overflow: hidden` |
| `had-se-bahar-x/y` | `chupao`, `ghumaao` | `had-se-bahar-x-ghumaao` | `overflow-x: auto` |
| `ungli-{val}` | `haan`, `na`, `likhai`, `rok-do`, `khisko` | `ungli-haan` | `cursor: pointer` |

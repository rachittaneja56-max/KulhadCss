# 🏺 KulhadCSS

A **Kadak** utility-first CSS engine brewed with pure Vanilla JS. 

Apply layout, spacing, and styling beautifully using intuitive Indian terminology! KulhadCSS traverses your DOM, parsing classnames like `malai-10` and `ghumaav-5` and rendering them instantly—without any CSS file or preprocessors.

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

##  How It Works

KulhadCSS runs naturally in the browser without any bundler overhead:
1. **Parser:** Deconstructs unique class names (e.g., `malai-10` into `padding: 40px`).
2. **Applier:** Scans through the DOM elements and applies the generated inline styles to the `style` object directly.
3. **Auto-Initialization:** It automatically listens to the `DOMContentLoaded` event, so all your styled elements are beautifully rendered once HTML is loaded.

## The Desi Dictionary

All dynamic utilities in KulhadCSS follow a strict 4-pixel base scale:
> **1 unit = 4px**

### Layout Utilities (Static)

| Class Name | CSS Property | Description |
|---|---|---|
| `milkar` | `display: flex;` | Initializes a flex container |
| `beech` | `display: flex; justify-content: center; align-items: center;` | Perfectly centers the content |

### Spacing & Visual Utilities (Dynamic)

| Class Prefix | CSS Property | Example | Calculation |
|---|---|---|---|
| `malai-{n}` | `padding` | `malai-4` | 4 × 4 = **16px** |
| `doori-{n}` | `margin` | `doori-8` | 8 × 4 = **32px** |
| `ghumaav-{n}` | `border-radius` | `ghumaav-5` | 5 × 4 = **20px** |

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
    <div class="milkar beech malai-10 ghumaav-5" style="background: #8b4513; color: white;">
        <h1 class="doori-2">🏺 KulhadCSS is Live!</h1>
    </div>
</body>
</html>
```

## License
[ISC](https://opensource.org/licenses/ISC) © Rachit
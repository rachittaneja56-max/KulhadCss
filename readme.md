# KulhadCSS

KulhadCSS is a lightweight, utility-first CSS engine built with Vanilla JavaScript. It allows developers to apply styles using intuitive Indian terminology, which are parsed and injected into the DOM at runtime.

The engine eliminates the need for traditional CSS files or preprocessors for basic layout and spacing, providing a zero-dependency solution for modern web projects.

---

## Installation

Install the package via NPM:

```bash
npm install kulhadcss

How It Works
------------

KulhadCSS operates on a three-tier architecture:

### 1. Parser

Deconstructs class names (e.g., malai-10) into valid CSS properties and calculated pixel values.

### 2. Applier

Traverses the DOM using document.querySelectorAll and applies generated styles directly via the style object.

### 3. Auto-Initialization

Listens for the DOMContentLoaded event to ensure all elements are styled once the HTML is ready.

The Desi Dictionary
-------------------

All dynamic utilities follow a base scale:

> **1 unit = 4px**

### Layout Utilities (Static)

ClassCSS Property Description

milkar display: flex; Initializes a flex container

beech justify-content: center; align-items: center; Centers content in flex container

### Spacing & Visual Utilities (Dynamic)

Class Prefix CSSProperty Example Calculation

malai padding malai-4 4 × 4 = 16px

doori margin doori-8 8 × 4 = 32px ghumaav border-radius ghumaav-5 5 × 4 = 20px

License
-------

ISC
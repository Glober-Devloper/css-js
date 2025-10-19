export const ebookContent2 = {
  "CSS Position Property": [
    {
      heading: "Understanding Position",
      content: "The position property determines how an element is positioned in the document. It works together with the top, right, bottom, and left properties to precisely place elements. Position is fundamental for creating complex layouts, overlays, and fixed navigation.",
      order_index: 1
    },
    {
      heading: "position: static",
      content: "The default value. Elements are positioned according to the normal document flow. Top, right, bottom, left, and z-index properties have no effect. This is how elements naturally appear on the page.",
      syntax_example: ".box {\n  position: static; /* Default */\n  /* top, left, etc. are ignored */\n}",
      explanation: "Static positioning follows the natural flow of the HTML document.",
      order_index: 2
    },
    {
      heading: "position: relative",
      content: "The element is positioned relative to its normal position in the document flow. Using top, right, bottom, left offsets moves it from where it would normally be, but the original space is preserved. Creates a positioning context for absolutely positioned children.",
      syntax_example: ".box {\n  position: relative;\n  top: 20px; /* Moves down 20px */\n  left: 30px; /* Moves right 30px */\n}",
      explanation: "The element visually shifts but its original space remains. Other elements behave as if it hasn't moved.",
      order_index: 3
    },
    {
      heading: "position: absolute",
      content: "The element is removed from the document flow and positioned relative to its nearest positioned ancestor (an ancestor with position other than static). If no positioned ancestor exists, it's positioned relative to the initial containing block (usually the viewport).",
      syntax_example: ".container {\n  position: relative; /* Positioning context */\n}\n.box {\n  position: absolute;\n  top: 0;\n  right: 0; /* Top-right of container */\n}",
      explanation: "Absolute elements don't affect other elements' positioning. They're positioned relative to the nearest positioned ancestor.",
      order_index: 4
    },
    {
      heading: "position: fixed",
      content: "The element is removed from the document flow and positioned relative to the viewport. It stays in the same place even when scrolling. Commonly used for fixed headers, footers, and floating action buttons.",
      syntax_example: ".navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  z-index: 1000;\n}",
      explanation: "Fixed elements remain visible in the same viewport position during scrolling.",
      order_index: 5
    },
    {
      heading: "position: sticky",
      content: "A hybrid of relative and fixed positioning. The element is treated as relative until it crosses a specified threshold (top, right, bottom, left), then it's treated as fixed. When scrolling back, it returns to relative positioning.",
      syntax_example: ".sidebar {\n  position: sticky;\n  top: 20px; /* Sticks 20px from top when scrolling */\n}",
      explanation: "Sticky positioning is perfect for navigation menus that stick during scrolling but don't start at the top.",
      order_index: 6
    },
    {
      heading: "z-index Property",
      content: "The z-index property controls the stacking order of positioned elements (elements with position other than static). Higher values appear in front. Only works on positioned elements. Creates stacking contexts.",
      syntax_example: ".back {\n  position: relative;\n  z-index: 1;\n}\n.front {\n  position: relative;\n  z-index: 10;\n}",
      explanation: "z-index determines which element appears on top when elements overlap. Requires positioned element.",
      order_index: 7
    },
    {
      heading: "Centering with Absolute Position",
      content: "A common technique for centering absolutely positioned elements uses all four offset properties with auto margins, or uses transform.",
      syntax_example: "/* Method 1: Auto margins */\n.center1 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 200px;\n  height: 100px;\n}\n\n/* Method 2: Transform */\n.center2 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}",
      explanation: "Both methods center the element. Transform method works without knowing the element's dimensions.",
      order_index: 8
    }
  ],
  "CSS Vertical Align Property": [
    {
      heading: "Understanding Vertical Align",
      content: "The vertical-align property controls the vertical alignment of inline, inline-block, and table-cell elements. It does NOT work on block-level elements. It's often misunderstood and confused with centering methods for block elements.",
      order_index: 1
    },
    {
      heading: "Common Values",
      content: "vertical-align accepts various values: baseline (default, aligns with parent's baseline), top (aligns to top of line), middle (aligns middle of element with baseline plus half the x-height), bottom (aligns to bottom of line), text-top, text-bottom, super, sub, and length/percentage values.",
      syntax_example: ".text { vertical-align: baseline; }\n.icon { vertical-align: middle; }\n.super { vertical-align: super; }\n.custom { vertical-align: -5px; }",
      explanation: "Different values align elements relative to the line box or parent element in different ways.",
      order_index: 2
    },
    {
      heading: "Vertical Align for Inline Elements",
      content: "When used with inline elements like spans or images within text, vertical-align controls how they align with surrounding text.",
      syntax_example: "img {\n  vertical-align: middle; /* Aligns with text */\n}\n.icon {\n  display: inline-block;\n  vertical-align: text-bottom;\n}",
      explanation: "Common use case: aligning icons with text in navigation menus or buttons.",
      order_index: 3
    },
    {
      heading: "Vertical Align in Table Cells",
      content: "In table cells (display: table-cell), vertical-align works differently and is very useful for centering content vertically. Values: top, middle, bottom are most common.",
      syntax_example: ".table-cell {\n  display: table-cell;\n  vertical-align: middle;\n  height: 200px;\n}",
      explanation: "Table-cell display with vertical-align: middle is a classic centering technique.",
      order_index: 4
    },
    {
      heading: "Common Misconceptions",
      content: "vertical-align does NOT vertically center block elements within their containers. For that, use flexbox (align-items: center), grid (align-items: center), absolute positioning, or line-height techniques. vertical-align only works with inline and table-cell elements.",
      order_index: 5
    }
  ],
  "CSS White Space Property": [
    {
      heading: "Understanding White Space",
      content: "The white-space property controls how white space (spaces, tabs, newlines) inside an element is handled. It affects text wrapping and preservation of spaces and line breaks from the HTML source code.",
      order_index: 1
    },
    {
      heading: "white-space: normal",
      content: "The default value. Sequences of white space are collapsed into a single space. Text wraps to fit the container. Newlines in the HTML are treated as single spaces.",
      syntax_example: ".text {\n  white-space: normal; /* Default */\n}",
      explanation: "Multiple spaces become one space. Text automatically wraps at container edge.",
      order_index: 2
    },
    {
      heading: "white-space: nowrap",
      content: "White space is collapsed like normal, but text does not wrap. All text stays on a single line, potentially overflowing the container. Commonly used with text-overflow: ellipsis for truncated text.",
      syntax_example: ".no-wrap {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
      explanation: "Forces text to a single line. Perfect for truncating long text with ellipsis.",
      order_index: 3
    },
    {
      heading: "white-space: pre",
      content: "White space is preserved exactly as in the HTML source. Text does not wrap. Acts like the <pre> HTML element. Multiple spaces and newlines are all preserved.",
      syntax_example: ".code {\n  white-space: pre;\n  font-family: monospace;\n}",
      explanation: "Preserves all formatting from source code. Useful for displaying code or preformatted text.",
      order_index: 4
    },
    {
      heading: "white-space: pre-wrap",
      content: "White space is preserved, but text wraps when necessary. Combines preservation of spaces/newlines with automatic line wrapping.",
      syntax_example: ".preserve-wrap {\n  white-space: pre-wrap;\n}",
      explanation: "Best of both worlds: preserves formatting but prevents horizontal overflow.",
      order_index: 5
    },
    {
      heading: "white-space: pre-line",
      content: "Sequences of white space are collapsed (like normal), but newlines are preserved and text wraps. Only newlines are preserved, not spaces.",
      syntax_example: ".pre-line {\n  white-space: pre-line;\n}",
      explanation: "Respects line breaks from HTML but collapses multiple spaces into one.",
      order_index: 6
    },
    {
      heading: "white-space: break-spaces",
      content: "Similar to pre-wrap, but handles trailing spaces differently and allows breaking between any two characters.",
      syntax_example: ".break-spaces {\n  white-space: break-spaces;\n}",
      explanation: "Modern value with improved handling of edge cases compared to pre-wrap.",
      order_index: 7
    }
  ],
  "CSS Width Property": [
    {
      heading: "Understanding Width",
      content: "The width property sets the width of an element's content area (by default) or the entire element (with box-sizing: border-box). Width can be specified in various units and percentages. It applies to block and inline-block elements but not inline elements.",
      order_index: 1
    },
    {
      heading: "Width Units",
      content: "Width accepts various units: px (pixels, absolute), % (percentage of container width), em/rem (relative to font size), vw/vh (viewport units), auto (browser calculates width), and keywords like max-content, min-content, fit-content.",
      syntax_example: ".px-width { width: 500px; }\n.percent-width { width: 75%; }\n.viewport-width { width: 50vw; }\n.auto-width { width: auto; }",
      explanation: "Different units serve different purposes. Percentages and viewport units create responsive designs.",
      order_index: 2
    },
    {
      heading: "max-width",
      content: "The max-width property sets a maximum width. The element can be narrower but never wider. This is crucial for responsive design, preventing elements from becoming too wide on large screens. An element with width: 100% and max-width won't exceed the maximum even in large containers.",
      syntax_example: ".container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto; /* Center */\n}",
      explanation: "max-width enables fluid layouts that don't become too wide. Common pattern for responsive containers.",
      order_index: 3
    },
    {
      heading: "min-width",
      content: "The min-width property sets a minimum width. The element can be wider but never narrower. Prevents elements from becoming too small, ensuring readability and usability.",
      syntax_example: ".button {\n  min-width: 120px;\n  padding: 10px 20px;\n}",
      explanation: "Ensures elements maintain a minimum size even with little content.",
      order_index: 4
    },
    {
      heading: "width: auto vs width: 100%",
      content: "width: auto (default for block elements) makes the element take available width considering margin, border, padding. width: 100% makes the content area 100% of the container, potentially causing overflow if padding/border are added.",
      syntax_example: "/* Takes available width, no overflow */\n.auto { width: auto; }\n\n/* May overflow if padding/border exist */\n.full {\n  width: 100%;\n  padding: 20px; /* Causes overflow */\n}\n\n/* Better with border-box */\n.full-box {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px; /* No overflow */\n}",
      explanation: "auto is usually safer. If using 100%, combine with box-sizing: border-box.",
      order_index: 5
    },
    {
      heading: "Intrinsic Sizing Keywords",
      content: "Modern CSS provides intrinsic sizing keywords: max-content (width of content without wrapping), min-content (minimum width without overflow), fit-content (uses available space but doesn't exceed max-content).",
      syntax_example: ".max-content { width: max-content; }\n.min-content { width: min-content; }\n.fit-content { width: fit-content; }",
      explanation: "These keywords size elements based on their content, useful for dynamic layouts.",
      order_index: 6
    }
  ],
  "CSS Word Wrap Property": [
    {
      heading: "Understanding Word Wrap",
      content: "The word-wrap property (now officially called overflow-wrap) controls whether the browser can break long unbreakable words to prevent overflow. This is especially important for user-generated content with long URLs or strings.",
      order_index: 1
    },
    {
      heading: "word-wrap: normal",
      content: "The default value. Words break only at allowed break points (spaces, hyphens). Long unbreakable strings may overflow their container.",
      syntax_example: ".text {\n  word-wrap: normal; /* Default */\n}",
      explanation: "Normal behavior respects word boundaries but may cause overflow with long strings.",
      order_index: 2
    },
    {
      heading: "word-wrap: break-word",
      content: "Allows unbreakable words to be broken at arbitrary points if necessary to prevent overflow. The browser tries to break at normal points first, only breaking words as a last resort.",
      syntax_example: ".break {\n  word-wrap: break-word;\n  /* or */\n  overflow-wrap: break-word;\n}",
      explanation: "Prevents overflow by breaking long words if needed. Essential for user-generated content.",
      order_index: 3
    },
    {
      heading: "word-break Property",
      content: "Related property word-break controls how words break. Values: normal (default rules), break-all (breaks can occur between any characters), keep-all (don't break between characters), break-word (deprecated, use overflow-wrap).",
      syntax_example: ".break-all {\n  word-break: break-all; /* Aggressive breaking */\n}\n.keep-all {\n  word-break: keep-all; /* No breaking within words */\n}",
      explanation: "word-break is more aggressive. break-all breaks anywhere, even mid-word. Use carefully.",
      order_index: 4
    },
    {
      heading: "Handling Long URLs",
      content: "A common use case is preventing long URLs from breaking layouts. Combine overflow-wrap with word-break for robust handling.",
      syntax_example: ".url-container {\n  overflow-wrap: break-word;\n  word-break: break-word; /* Fallback */\n}",
      explanation: "This combination handles most long-string scenarios, including URLs and emails.",
      order_index: 5
    },
    {
      heading: "hyphens Property",
      content: "The hyphens property controls hyphenation of words when they break. Values: none (no hyphens), manual (only breaks at &shy; or hyphens), auto (automatically hyphenates based on language rules).",
      syntax_example: ".hyphenate {\n  hyphens: auto;\n  overflow-wrap: break-word;\n  lang: 'en';\n}",
      explanation: "Automatic hyphenation improves readability when breaking words. Requires lang attribute on HTML.",
      order_index: 6
    }
  ],
  "CSS Outline Property": [
    {
      heading: "Understanding Outline",
      content: "The outline property draws a line around an element outside its border. Unlike borders, outlines don't take up space and don't affect layout. They're primarily used for indicating focus and are important for accessibility. Outlines can overlap adjacent elements.",
      order_index: 1
    },
    {
      heading: "Outline vs Border",
      content: "Key differences: Outlines don't take up space (no layout changes), outlines don't affect element dimensions, outlines can be non-rectangular, outlines don't have individual sides (all sides styled together), outlines appear outside borders.",
      order_index: 2
    },
    {
      heading: "outline-style",
      content: "Sets the style of the outline. Required for outline to display. Values: none, solid, dashed, dotted, double, groove, ridge, inset, outset. Similar to border-style values.",
      syntax_example: ".outline1 { outline-style: solid; }\n.outline2 { outline-style: dashed; }\n.outline3 { outline-style: dotted; }",
      explanation: "Without outline-style, no outline appears. It's the required property.",
      order_index: 3
    },
    {
      heading: "outline-width",
      content: "Sets the thickness of the outline. Values: thin, medium (default), thick, or specific lengths (px, em, rem).",
      syntax_example: ".outline {\n  outline-style: solid;\n  outline-width: 3px;\n}",
      explanation: "Controls outline thickness. Works similarly to border-width.",
      order_index: 4
    },
    {
      heading: "outline-color",
      content: "Sets the color of the outline. Accepts any valid color value. Default is the current text color (currentColor).",
      syntax_example: ".outline {\n  outline-style: solid;\n  outline-width: 2px;\n  outline-color: blue;\n}",
      explanation: "Outline color can be any valid CSS color value.",
      order_index: 5
    },
    {
      heading: "outline Shorthand",
      content: "The outline property is a shorthand for width, style, and color. Style is required; order of other values doesn't matter.",
      syntax_example: ".outline1 {\n  outline: 2px solid blue;\n}\n.outline2 {\n  outline: dashed red 3px;\n}",
      explanation: "Shorthand is more concise. Style is required; width and color are optional.",
      order_index: 6
    },
    {
      heading: "outline-offset",
      content: "Sets the space between the outline and the edge of the element. Can be positive (moves outline outward) or negative (moves outline inward). This property doesn't affect layout.",
      syntax_example: ".spaced-outline {\n  outline: 2px solid blue;\n  outline-offset: 5px; /* 5px gap */\n}\n.inner-outline {\n  outline: 2px solid red;\n  outline-offset: -5px; /* Inside border */\n}",
      explanation: "outline-offset creates interesting visual effects without affecting layout.",
      order_index: 7
    },
    {
      heading: "Focus Outlines and Accessibility",
      content: "Browsers add default focus outlines to interactive elements for keyboard navigation. Never remove outlines without providing alternative focus indicators. This is critical for accessibility.",
      syntax_example: "/* BAD - Never do this without replacement */\nbutton {\n  outline: none;\n}\n\n/* GOOD - Custom focus indicator */\nbutton:focus {\n  outline: 2px solid blue;\n  outline-offset: 2px;\n}\n\n/* BETTER - Visible for keyboard, hidden for mouse */\nbutton:focus-visible {\n  outline: 2px solid blue;\n  outline-offset: 2px;\n}",
      explanation: "Focus indicators help keyboard users navigate. Use :focus-visible for modern focus styling.",
      order_index: 8
    }
  ],
  "CSS Visibility Property": [
    {
      heading: "Understanding Visibility",
      content: "The visibility property controls whether an element is visible or hidden. Unlike display: none, hidden elements still occupy space in the layout. The property is inherited by child elements but can be overridden.",
      order_index: 1
    },
    {
      heading: "visibility: visible",
      content: "The default value. The element is visible and rendered normally.",
      syntax_example: ".show {\n  visibility: visible;\n}",
      explanation: "Elements are visible by default. Use this to override inherited hidden values.",
      order_index: 2
    },
    {
      heading: "visibility: hidden",
      content: "The element is invisible but still occupies space in the layout. It's as if the element has opacity: 0 but without the fade. Child elements can override this with visibility: visible.",
      syntax_example: ".hide {\n  visibility: hidden;\n}\n.hide .show-child {\n  visibility: visible; /* Child can be visible */\n}",
      explanation: "Hidden elements take up space but are invisible. Useful for reserving layout space.",
      order_index: 3
    },
    {
      heading: "visibility: collapse",
      content: "For table rows, columns, and groups, collapse removes them from display like display: none. For other elements, it behaves like hidden. Primarily used with tables.",
      syntax_example: "tr.hidden {\n  visibility: collapse;\n}",
      explanation: "collapse is specialized for tables. Other elements should use hidden or display: none.",
      order_index: 4
    },
    {
      heading: "visibility vs display: none",
      content: "Key differences: visibility: hidden preserves layout space, can be overridden by children, and the element is still in the accessibility tree. display: none removes element from layout, cannot be overridden by children, and removes element from accessibility tree.",
      syntax_example: "/* Takes up space, invisible */\n.invisible {\n  visibility: hidden;\n}\n\n/* Removed from layout */\n.gone {\n  display: none;\n}",
      explanation: "Use visibility: hidden to preserve layout. Use display: none to completely remove the element.",
      order_index: 5
    },
    {
      heading: "visibility vs opacity: 0",
      content: "Both make elements invisible, but opacity: 0 elements remain interactive (can be clicked), while visibility: hidden elements are not interactive. Both preserve layout space.",
      syntax_example: "/* Invisible but clickable */\n.transparent {\n  opacity: 0;\n}\n\n/* Invisible and not interactive */\n.hidden {\n  visibility: hidden;\n}",
      explanation: "Choose based on whether the element should remain interactive when invisible.",
      order_index: 6
    }
  ],
  "CSS Counter Property": [
    {
      heading: "Understanding CSS Counters",
      content: "CSS counters are variables maintained by CSS whose values can be incremented or decremented by CSS rules. They enable automatic numbering of elements without JavaScript. Counters are useful for numbered sections, ordered lists, and complex numbering schemes.",
      order_index: 1
    },
    {
      heading: "counter-reset",
      content: "Creates or resets one or more counters. Typically placed on a container element. You can initialize counters to specific values (default is 0).",
      syntax_example: ".container {\n  counter-reset: section; /* Creates counter named 'section' at 0 */\n}\n.other {\n  counter-reset: chapter 1; /* Starts at 1 */\n  counter-reset: item1 item2; /* Multiple counters */\n}",
      explanation: "counter-reset initializes counters. Place it on the parent of elements to be counted.",
      order_index: 2
    },
    {
      heading: "counter-increment",
      content: "Increments (or decrements) one or more counters. Typically placed on the elements being counted. Default increment is 1, but you can specify other values.",
      syntax_example: ".item {\n  counter-increment: section; /* Increments by 1 */\n}\n.item2 {\n  counter-increment: chapter 2; /* Increments by 2 */\n}\n.item3 {\n  counter-increment: page -1; /* Decrements by 1 */\n}",
      explanation: "counter-increment changes counter values. Can increment or decrement by any amount.",
      order_index: 3
    },
    {
      heading: "counter() and counters() Functions",
      content: "Display counter values using the counter() function in content property. counters() is used for nested counters with separators. These functions can format numbers in different styles.",
      syntax_example: ".item::before {\n  content: counter(section); /* Displays number */\n}\n.item2::before {\n  content: counter(section, upper-roman); /* I, II, III */\n}\n.nested::before {\n  content: counters(section, '.') '. '; /* 1.1, 1.2 */\n}",
      explanation: "counter() displays the value. Second argument specifies numbering style (decimal, upper-roman, etc.).",
      order_index: 4
    },
    {
      heading: "Numbering Styles",
      content: "Counters support various numbering styles: decimal (1, 2, 3), decimal-leading-zero (01, 02, 03), lower-roman (i, ii, iii), upper-roman (I, II, III), lower-alpha (a, b, c), upper-alpha (A, B, C), and more.",
      syntax_example: ".decimal::before { content: counter(item, decimal); }\n.roman::before { content: counter(item, upper-roman); }\n.alpha::before { content: counter(item, lower-alpha); }",
      explanation: "Different styles for different contexts. Roman numerals for chapters, letters for appendices, etc.",
      order_index: 5
    },
    {
      heading: "Practical Example: Numbered Sections",
      content: "A complete example showing automatic section numbering in a document.",
      syntax_example: "body {\n  counter-reset: section;\n}\n\nh2 {\n  counter-reset: subsection;\n}\n\nh2::before {\n  counter-increment: section;\n  content: 'Section ' counter(section) ': ';\n}\n\nh3::before {\n  counter-increment: subsection;\n  content: counter(section) '.' counter(subsection) ' ';\n}",
      explanation: "This creates numbering like 'Section 1: Title' and '1.1 Subtitle' automatically.",
      order_index: 6
    },
    {
      heading: "Nested Counters",
      content: "The counters() function handles nested counting, like 1.1, 1.2, 2.1, etc. It automatically manages multiple instances of the same counter at different nesting levels.",
      syntax_example: "ol {\n  counter-reset: item;\n}\n\nli {\n  counter-increment: item;\n}\n\nli::before {\n  content: counters(item, '.') '. ';\n}",
      explanation: "counters() with a separator creates hierarchical numbering for nested structures.",
      order_index: 7
    }
  ]
};

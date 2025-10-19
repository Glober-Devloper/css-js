export const ebookContent = {
  units: [
    {
      unit_number: "Unit II",
      title: "Cascading Style Sheet",
      duration: "10 Hours",
      order_index: 1
    },
    {
      unit_number: "Unit III",
      title: "JavaScript",
      duration: "15 Hours",
      order_index: 2
    }
  ],
  topics: {
    "Unit II": [
      { title: "Introduction to CSS", order_index: 1 },
      { title: "CSS Syntax", order_index: 2 },
      { title: "CSS Selectors", order_index: 3 },
      { title: "How to Add CSS", order_index: 4 },
      { title: "CSS Comments", order_index: 5 },
      { title: "CSS Background Properties", order_index: 6 },
      { title: "CSS Border Properties", order_index: 7 },
      { title: "CSS Display Property", order_index: 8 },
      { title: "CSS Float Property", order_index: 9 },
      { title: "CSS Font Properties", order_index: 10 },
      { title: "CSS Line Height Property", order_index: 11 },
      { title: "CSS Margin Property", order_index: 12 },
      { title: "CSS Opacity Property", order_index: 13 },
      { title: "CSS Overflow Property", order_index: 14 },
      { title: "CSS Padding Property", order_index: 15 },
      { title: "CSS Position Property", order_index: 16 },
      { title: "CSS Vertical Align Property", order_index: 17 },
      { title: "CSS White Space Property", order_index: 18 },
      { title: "CSS Width Property", order_index: 19 },
      { title: "CSS Word Wrap Property", order_index: 20 },
      { title: "CSS Outline Property", order_index: 21 },
      { title: "CSS Visibility Property", order_index: 22 },
      { title: "CSS Counter Property", order_index: 23 }
    ],
    "Unit III": [
      { title: "Introduction to JavaScript", order_index: 1 },
      { title: "Features of JavaScript", order_index: 2 },
      { title: "Applications of JavaScript", order_index: 3 },
      { title: "How to Add JavaScript", order_index: 4 },
      { title: "JavaScript Comments", order_index: 5 },
      { title: "JavaScript Variables", order_index: 6 },
      { title: "JavaScript Data Types", order_index: 7 },
      { title: "JavaScript Interactions", order_index: 8 },
      { title: "Type Conversions", order_index: 9 },
      { title: "JavaScript Operators", order_index: 10 },
      { title: "Selection Structures", order_index: 11 },
      { title: "Loop Structures", order_index: 12 },
      { title: "JavaScript Functions", order_index: 13 },
      { title: "Function Expressions", order_index: 14 },
      { title: "JavaScript Object", order_index: 15 },
      { title: "JavaScript Array", order_index: 16 },
      { title: "JavaScript String", order_index: 17 },
      { title: "JavaScript Date", order_index: 18 },
      { title: "JavaScript Math", order_index: 19 },
      { title: "JavaScript Number", order_index: 20 },
      { title: "JavaScript Boolean", order_index: 21 },
      { title: "JavaScript JSON", order_index: 22 },
      { title: "JavaScript RegExp", order_index: 23 },
      { title: "Mouse Events", order_index: 24 },
      { title: "Moving the Mouse", order_index: 25 },
      { title: "Drag and Drop with Mouse Events", order_index: 26 },
      { title: "Keyboard Events", order_index: 27 },
      { title: "Scrolling Events", order_index: 28 }
    ]
  },
  content: {
    // Unit II - CSS Content
    "Introduction to CSS": [
      {
        heading: "What is CSS?",
        content: "CSS stands for Cascading Style Sheets. It is a stylesheet language used to describe the presentation and formatting of HTML documents. CSS controls the visual appearance of web pages including colors, fonts, layouts, spacing, and responsive design. The term 'cascading' refers to the way styles are applied in a hierarchical manner, where more specific styles override general ones.",
        order_index: 1
      },
      {
        heading: "Why Use CSS?",
        content: "CSS provides several key benefits: 1) Separation of Content and Presentation - HTML handles structure while CSS handles styling. 2) Reusability - One CSS file can style multiple HTML pages. 3) Easier Maintenance - Changes to styling can be made in one place. 4) Faster Page Loading - External CSS files can be cached by browsers. 5) Better User Experience - Consistent styling across pages and responsive design capabilities.",
        order_index: 2
      },
      {
        heading: "CSS History",
        content: "CSS was first proposed by Håkon Wium Lie in 1994. CSS1 was released in 1996, CSS2 in 1998, and CSS3 development began in 1999. CSS3 is modular, with different modules at different stages of development. Modern CSS includes features like Flexbox, Grid, animations, transitions, and custom properties (variables).",
        order_index: 3
      }
    ],
    "CSS Syntax": [
      {
        heading: "CSS Rule Structure",
        content: "A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.",
        syntax_example: "selector {\n  property: value;\n  property: value;\n}",
        explanation: "The selector identifies which HTML elements to style. The curly braces contain declarations. Each declaration has a property (what to style) and a value (how to style it).",
        order_index: 1
      },
      {
        heading: "Example of CSS Syntax",
        content: "Let's look at a practical example that changes the appearance of paragraph elements.",
        syntax_example: "p {\n  color: blue;\n  font-size: 16px;\n  text-align: center;\n}",
        explanation: "This rule selects all <p> elements. It sets the text color to blue, font size to 16 pixels, and centers the text. Multiple properties can be applied to the same selector.",
        order_index: 2
      },
      {
        heading: "Multiple Selectors",
        content: "You can apply the same styles to multiple selectors by separating them with commas. This reduces code duplication and makes maintenance easier.",
        syntax_example: "h1, h2, h3 {\n  font-family: Arial, sans-serif;\n  color: #333;\n}",
        explanation: "This rule applies the same font family and color to all h1, h2, and h3 heading elements.",
        order_index: 3
      }
    ],
    "CSS Selectors": [
      {
        heading: "Element Selector",
        content: "The element selector selects HTML elements based on their tag name. It is the most basic type of selector and targets all elements of a specific type on the page.",
        syntax_example: "p {\n  margin: 10px;\n}",
        explanation: "This selects all <p> elements and applies a 10px margin to them.",
        order_index: 1
      },
      {
        heading: "Class Selector",
        content: "The class selector selects elements with a specific class attribute. It is denoted by a period (.) followed by the class name. Classes can be reused across multiple elements and multiple classes can be applied to a single element.",
        syntax_example: ".highlight {\n  background-color: yellow;\n}",
        explanation: "This selects all elements with class='highlight' and gives them a yellow background.",
        order_index: 2
      },
      {
        heading: "ID Selector",
        content: "The ID selector selects a single element with a specific id attribute. It is denoted by a hash (#) followed by the id name. IDs must be unique within a page and are more specific than classes.",
        syntax_example: "#header {\n  background-color: navy;\n  color: white;\n}",
        explanation: "This selects the element with id='header' and applies navy background with white text.",
        order_index: 3
      },
      {
        heading: "Universal Selector",
        content: "The universal selector (*) selects all elements on the page. It is often used for resetting default browser styles or applying global styles.",
        syntax_example: "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}",
        explanation: "This removes default margins and paddings from all elements and sets box-sizing to border-box.",
        order_index: 4
      },
      {
        heading: "Descendant Selector",
        content: "The descendant selector selects all elements that are descendants of a specified element. It uses a space to separate the parent from the descendant.",
        syntax_example: "div p {\n  color: red;\n}",
        explanation: "This selects all <p> elements that are inside <div> elements, regardless of depth.",
        order_index: 5
      },
      {
        heading: "Child Selector",
        content: "The child selector (>) selects elements that are direct children of a specified element. It only selects immediate children, not all descendants.",
        syntax_example: "ul > li {\n  list-style-type: square;\n}",
        explanation: "This selects only <li> elements that are direct children of <ul>, not nested deeper.",
        order_index: 6
      },
      {
        heading: "Adjacent Sibling Selector",
        content: "The adjacent sibling selector (+) selects an element that comes immediately after another specific element. Both elements must have the same parent.",
        syntax_example: "h1 + p {\n  font-weight: bold;\n}",
        explanation: "This selects the first <p> element that comes immediately after an <h1> element.",
        order_index: 7
      },
      {
        heading: "General Sibling Selector",
        content: "The general sibling selector (~) selects all elements that are siblings of a specified element and come after it.",
        syntax_example: "h1 ~ p {\n  color: gray;\n}",
        explanation: "This selects all <p> elements that are siblings of <h1> and appear after it.",
        order_index: 8
      },
      {
        heading: "Attribute Selector",
        content: "Attribute selectors select elements based on an attribute or attribute value. They are enclosed in square brackets.",
        syntax_example: "input[type='text'] {\n  border: 1px solid gray;\n}",
        explanation: "This selects all input elements with type='text' and applies a gray border.",
        order_index: 9
      },
      {
        heading: "Pseudo-class Selector",
        content: "Pseudo-classes select elements based on their state or position. Common pseudo-classes include :hover, :focus, :first-child, :last-child, :nth-child().",
        syntax_example: "a:hover {\n  color: red;\n  text-decoration: underline;\n}",
        explanation: "This applies styles to links when the user hovers over them with the mouse.",
        order_index: 10
      },
      {
        heading: "Pseudo-element Selector",
        content: "Pseudo-elements allow you to style specific parts of an element. They use double colons (::). Common pseudo-elements include ::before, ::after, ::first-letter, ::first-line.",
        syntax_example: "p::first-letter {\n  font-size: 2em;\n  font-weight: bold;\n}",
        explanation: "This makes the first letter of every paragraph larger and bold, creating a drop cap effect.",
        order_index: 11
      }
    ],
    "How to Add CSS": [
      {
        heading: "Three Ways to Add CSS",
        content: "There are three methods to apply CSS to HTML documents: Inline CSS (using the style attribute), Internal CSS (using the <style> tag in the HTML head), and External CSS (linking to a separate .css file). Each method has its use cases and advantages.",
        order_index: 1
      },
      {
        heading: "Inline CSS",
        content: "Inline CSS applies styles directly to HTML elements using the style attribute. This method has the highest specificity and overrides other styles. However, it mixes content with presentation and is not recommended for large projects.",
        syntax_example: "<p style='color: blue; font-size: 18px;'>This is inline CSS</p>",
        explanation: "The style attribute contains CSS properties and values. Use this for quick testing or very specific one-off styles.",
        order_index: 2
      },
      {
        heading: "Internal CSS",
        content: "Internal CSS is defined within the <style> tag in the HTML document's <head> section. This method keeps styles within the same file and is useful for single-page applications or page-specific styles.",
        syntax_example: "<head>\n  <style>\n    body {\n      background-color: lightblue;\n    }\n    h1 {\n      color: navy;\n    }\n  </style>\n</head>",
        explanation: "All CSS rules are placed inside the <style> tag. This affects only the current HTML document.",
        order_index: 3
      },
      {
        heading: "External CSS",
        content: "External CSS uses a separate .css file linked to the HTML document. This is the most common and recommended method for production websites. It provides better organization, reusability, and cacheability.",
        syntax_example: "<!-- In HTML file -->\n<head>\n  <link rel='stylesheet' href='styles.css'>\n</head>\n\n/* In styles.css file */\nbody {\n  font-family: Arial, sans-serif;\n}\nh1 {\n  color: darkblue;\n}",
        explanation: "The <link> tag in HTML connects to the external CSS file. One CSS file can style multiple HTML pages.",
        order_index: 4
      },
      {
        heading: "Multiple CSS Files",
        content: "You can link multiple CSS files to organize styles by purpose (layout.css, typography.css, components.css). Files are loaded in order, and later styles can override earlier ones.",
        syntax_example: "<head>\n  <link rel='stylesheet' href='reset.css'>\n  <link rel='stylesheet' href='layout.css'>\n  <link rel='stylesheet' href='theme.css'>\n</head>",
        explanation: "Multiple stylesheets can be included. They are processed in the order they appear.",
        order_index: 5
      },
      {
        heading: "CSS Cascade and Specificity",
        content: "When multiple CSS rules target the same element, the cascade determines which rules apply. Priority order (low to high): Browser defaults, External CSS, Internal CSS, Inline CSS. Specificity determines which rule wins when multiple rules have the same importance: Inline styles (1000), IDs (100), Classes/attributes/pseudo-classes (10), Elements/pseudo-elements (1).",
        order_index: 6
      }
    ],
    "CSS Comments": [
      {
        heading: "Purpose of CSS Comments",
        content: "Comments in CSS are used to explain code, make it more readable, and temporarily disable certain styles during development. Comments are ignored by browsers and do not affect the rendering of the page. They are valuable for documentation and team collaboration.",
        order_index: 1
      },
      {
        heading: "CSS Comment Syntax",
        content: "CSS uses /* */ for comments. Everything between these symbols is ignored by the browser. Comments can span single or multiple lines.",
        syntax_example: "/* This is a single-line comment */\n\np {\n  color: blue; /* Inline comment */\n}\n\n/* \n  This is a\n  multi-line comment\n  that spans several lines\n*/",
        explanation: "Use /* to start a comment and */ to end it. Comments can appear anywhere in CSS code.",
        order_index: 2
      },
      {
        heading: "Commenting Best Practices",
        content: "Use comments to: 1) Explain complex selectors or property values, 2) Organize CSS into sections, 3) Document browser-specific hacks or workarounds, 4) Temporarily disable styles during debugging, 5) Provide attribution for code from external sources. Keep comments concise and meaningful.",
        syntax_example: "/* ========== Header Styles ========== */\n\n/* Sticky navigation for desktop */\n.nav {\n  position: sticky;\n  top: 0;\n}\n\n/* TODO: Fix mobile menu overlap issue */",
        explanation: "Well-placed comments make CSS more maintainable and easier to understand for other developers.",
        order_index: 3
      }
    ],
    "CSS Background Properties": [
      {
        heading: "background-color",
        content: "The background-color property sets the background color of an element. It accepts color names, hex codes, RGB, RGBA, HSL, or HSLA values. The default value is transparent.",
        syntax_example: ".box {\n  background-color: lightblue;\n}\n.header {\n  background-color: #3498db;\n}\n.overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n}",
        explanation: "Different color formats can be used. RGBA allows transparency with the alpha channel (0-1).",
        order_index: 1
      },
      {
        heading: "background-image",
        content: "The background-image property sets one or more background images for an element. Images are drawn on stacking context layers, with the first specified being drawn closest to the user.",
        syntax_example: ".banner {\n  background-image: url('banner.jpg');\n}\n.gradient {\n  background-image: linear-gradient(to right, red, yellow);\n}",
        explanation: "Use url() to specify an image file path. CSS gradients can also be used as background images.",
        order_index: 2
      },
      {
        heading: "background-repeat",
        content: "The background-repeat property controls how background images are repeated. Values include: repeat (default, repeats both ways), repeat-x (horizontal only), repeat-y (vertical only), no-repeat (no repetition), space (repeats with equal spacing), round (repeats and stretches to fit).",
        syntax_example: ".pattern {\n  background-image: url('pattern.png');\n  background-repeat: repeat;\n}\n.hero {\n  background-image: url('hero.jpg');\n  background-repeat: no-repeat;\n}",
        explanation: "Control whether and how the background image tiles to fill the element's background area.",
        order_index: 3
      },
      {
        heading: "background-position",
        content: "The background-position property sets the initial position of a background image. You can use keywords (top, bottom, left, right, center), percentages, or length values (px, em, etc.). Two values set horizontal and vertical position.",
        syntax_example: ".logo {\n  background-image: url('logo.png');\n  background-position: center center;\n}\n.banner {\n  background-position: right 20px top 50px;\n}",
        explanation: "Position the background image within the element. Default is 'left top' (0% 0%).",
        order_index: 4
      },
      {
        heading: "background-size",
        content: "The background-size property specifies the size of background images. Values include: auto (default), cover (scales to cover entire area), contain (scales to fit within area), or specific dimensions (px, %, etc.).",
        syntax_example: ".cover {\n  background-image: url('photo.jpg');\n  background-size: cover;\n}\n.contain {\n  background-size: contain;\n}\n.custom {\n  background-size: 200px 100px;\n}",
        explanation: "'cover' maintains aspect ratio and covers the area (may crop). 'contain' maintains aspect ratio and fits entirely (may show empty space).",
        order_index: 5
      },
      {
        heading: "background-attachment",
        content: "The background-attachment property determines whether a background image scrolls with the content or is fixed. Values: scroll (default, scrolls with content), fixed (stays in place), local (scrolls with element's content).",
        syntax_example: ".parallax {\n  background-image: url('mountains.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n}",
        explanation: "Fixed backgrounds create a parallax scrolling effect where the background stays in place while content scrolls.",
        order_index: 6
      },
      {
        heading: "background-origin",
        content: "The background-origin property specifies where the background image is positioned relative to the box model. Values: padding-box (default, relative to padding area), border-box (relative to border area), content-box (relative to content area).",
        syntax_example: ".box {\n  padding: 20px;\n  border: 10px solid transparent;\n  background-origin: border-box;\n}",
        explanation: "This property determines the reference point for background-position calculations.",
        order_index: 7
      },
      {
        heading: "background-clip",
        content: "The background-clip property defines how far the background (color or image) should extend within an element. Values: border-box (default, extends to border edge), padding-box (extends to padding edge), content-box (extends to content edge), text (clips to text, requires -webkit- prefix).",
        syntax_example: ".card {\n  background-color: yellow;\n  background-clip: padding-box;\n}\n.text-gradient {\n  background: linear-gradient(45deg, red, blue);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}",
        explanation: "Control where the background is visible. The text value creates gradient text effects.",
        order_index: 8
      },
      {
        heading: "background Shorthand",
        content: "The background property is a shorthand for setting multiple background properties at once. Order: color, image, repeat, attachment, position / size, origin, clip.",
        syntax_example: ".hero {\n  background: #fff url('bg.jpg') no-repeat center / cover fixed;\n}",
        explanation: "Combines multiple background properties in a single declaration. Size must be preceded by position and separated with '/'.",
        order_index: 9
      }
    ],
    "CSS Border Properties": [
      {
        heading: "border-style",
        content: "The border-style property sets the style of an element's border. It is required for borders to display. Values include: none (no border), solid (solid line), dashed (dashed line), dotted (dotted line), double (double line), groove (3D grooved), ridge (3D ridged), inset (3D inset), outset (3D outset), hidden (like none, but for table conflicts).",
        syntax_example: ".box1 { border-style: solid; }\n.box2 { border-style: dashed; }\n.box3 { border-style: dotted; }\n.box4 { border-style: double; }",
        explanation: "Different border styles create different visual effects. Without border-style, no border appears.",
        order_index: 1
      },
      {
        heading: "border-width",
        content: "The border-width property sets the thickness of borders. Values can be: thin, medium, thick, or specific lengths (px, em, rem). Can specify 1-4 values for different sides (top, right, bottom, left).",
        syntax_example: ".box {\n  border-style: solid;\n  border-width: 2px;\n}\n.custom {\n  border-style: solid;\n  border-width: 5px 10px 15px 20px; /* T R B L */\n}",
        explanation: "If one value: all sides. Two values: top/bottom, left/right. Three values: top, left/right, bottom. Four values: clockwise from top.",
        order_index: 2
      },
      {
        heading: "border-color",
        content: "The border-color property sets the color of borders. Accepts any valid color value. If not specified, the element's color property is used. Can specify 1-4 values for different sides.",
        syntax_example: ".box {\n  border-style: solid;\n  border-width: 3px;\n  border-color: red;\n}\n.rainbow {\n  border-style: solid;\n  border-width: 5px;\n  border-color: red green blue yellow;\n}",
        explanation: "Multiple colors create multi-colored borders. Follow the same order pattern as border-width.",
        order_index: 3
      },
      {
        heading: "Individual Side Borders",
        content: "You can style each border side individually using border-top, border-right, border-bottom, and border-left properties. Each accepts style, width, and color values.",
        syntax_example: ".box {\n  border-top: 2px solid red;\n  border-right: 3px dashed blue;\n  border-bottom: 4px dotted green;\n  border-left: 5px double yellow;\n}",
        explanation: "Individual border properties allow complete control over each side's appearance.",
        order_index: 4
      },
      {
        heading: "border Shorthand",
        content: "The border property is a shorthand that sets width, style, and color for all four borders at once. Style is required; width and color are optional.",
        syntax_example: ".box1 {\n  border: 2px solid black;\n}\n.box2 {\n  border: 3px dashed;\n}\n.box3 {\n  border: solid red;\n}",
        explanation: "The shorthand is more concise. Order doesn't matter, but convention is: width, style, color.",
        order_index: 5
      },
      {
        heading: "border-radius",
        content: "The border-radius property rounds the corners of an element's border. Values can be in px, %, or em. Can specify 1-4 values for different corners (top-left, top-right, bottom-right, bottom-left). Using 50% creates circles or pills.",
        syntax_example: ".rounded {\n  border: 2px solid black;\n  border-radius: 10px;\n}\n.circle {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n.custom {\n  border-radius: 10px 20px 30px 40px;\n}",
        explanation: "border-radius is key for modern, rounded designs. 50% creates perfect circles from squares.",
        order_index: 6
      },
      {
        heading: "Individual Corner Radius",
        content: "Each corner can have its own radius using: border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius. Each can accept two values for elliptical corners (horizontal vertical).",
        syntax_example: ".box {\n  border: 2px solid navy;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 20px 40px;\n}",
        explanation: "Individual corner properties allow asymmetric rounded corners and elliptical curves.",
        order_index: 7
      },
      {
        heading: "border-image",
        content: "The border-image property allows you to use an image as the border of an element. It's a shorthand for border-image-source, border-image-slice, border-image-width, border-image-outset, and border-image-repeat.",
        syntax_example: ".fancy-border {\n  border: 15px solid transparent;\n  border-image: url('border-pattern.png') 30 round;\n}",
        explanation: "border-image creates decorative borders using images. The slice value determines how the image is divided.",
        order_index: 8
      }
    ],
    "CSS Display Property": [
      {
        heading: "Understanding Display Property",
        content: "The display property is one of the most important CSS properties for layout. It specifies how an element is displayed and affects its behavior in the document flow. Every HTML element has a default display value that determines whether it behaves as a block or inline element.",
        order_index: 1
      },
      {
        heading: "display: block",
        content: "Block-level elements take up the full width available, start on a new line, and push subsequent elements to the next line. They respect all margin and padding values. Common block elements: div, p, h1-h6, section, article.",
        syntax_example: ".block-element {\n  display: block;\n  width: 50%; /* Can set width */\n  margin: 10px; /* All margins work */\n  padding: 20px;\n}",
        explanation: "Block elements stack vertically and can have width, height, and all spacing properties applied.",
        order_index: 2
      },
      {
        heading: "display: inline",
        content: "Inline elements only take up as much width as necessary and do not start on a new line. They flow within text content. Width and height properties have no effect. Top and bottom margins/paddings are ignored. Common inline elements: span, a, strong, em.",
        syntax_example: ".inline-element {\n  display: inline;\n  /* width and height have no effect */\n  padding: 5px 10px; /* Only left/right fully work */\n  margin: 0 5px;\n}",
        explanation: "Inline elements flow like text. Vertical spacing doesn't fully work, only horizontal spacing.",
        order_index: 3
      },
      {
        heading: "display: inline-block",
        content: "Inline-block combines features of both inline and block. Elements flow inline but respect width, height, and all spacing properties like block elements. Perfect for creating horizontal layouts while maintaining control over dimensions.",
        syntax_example: ".inline-block-element {\n  display: inline-block;\n  width: 200px; /* Width works */\n  height: 100px; /* Height works */\n  margin: 10px; /* All margins work */\n  vertical-align: top;\n}",
        explanation: "inline-block is ideal for navigation menus, button groups, and card layouts that need to be horizontal.",
        order_index: 4
      },
      {
        heading: "display: none",
        content: "The none value completely removes the element from the document flow. The element is not rendered and takes up no space. It's as if the element doesn't exist in the DOM for layout purposes (though it still exists in the HTML).",
        syntax_example: ".hidden {\n  display: none;\n}\n\n/* Show on hover of parent */\n.parent:hover .hidden {\n  display: block;\n}",
        explanation: "display: none is commonly used for hiding elements, dropdowns, and modal dialogs until needed.",
        order_index: 5
      },
      {
        heading: "display: flex",
        content: "Flex display creates a flexible box layout. The element becomes a flex container, and its direct children become flex items. Provides powerful alignment, distribution, and ordering capabilities in one dimension (row or column).",
        syntax_example: ".flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}",
        explanation: "Flexbox is the modern standard for creating flexible, responsive layouts with minimal code.",
        order_index: 6
      },
      {
        heading: "display: grid",
        content: "Grid display creates a grid layout system. The element becomes a grid container, and its direct children become grid items. Provides powerful two-dimensional layout capabilities with rows and columns.",
        syntax_example: ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}",
        explanation: "CSS Grid is ideal for complex two-dimensional layouts like page structures and galleries.",
        order_index: 7
      },
      {
        heading: "display: inline-flex and inline-grid",
        content: "These values make the container behave as an inline element while its children follow flex or grid rules. Useful when you want the container to flow inline but use flex/grid internally.",
        syntax_example: ".inline-flex {\n  display: inline-flex;\n  gap: 5px;\n}\n.inline-grid {\n  display: inline-grid;\n  grid-template-columns: 1fr 1fr;\n}",
        explanation: "These combine inline behavior for the container with flex/grid behavior for children.",
        order_index: 8
      },
      {
        heading: "display: table, table-row, table-cell",
        content: "These values make elements behave like HTML table elements without using table markup. Useful for vertical centering and equal-height columns in older browsers, though flex and grid are now preferred.",
        syntax_example: ".table-layout {\n  display: table;\n  width: 100%;\n}\n.table-row {\n  display: table-row;\n}\n.table-cell {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n}",
        explanation: "Table display values were once common for layouts, now mostly replaced by flexbox and grid.",
        order_index: 9
      }
    ],
    "CSS Float Property": [
      {
        heading: "Understanding Float",
        content: "The float property positions an element to the left or right of its container, allowing text and inline elements to wrap around it. Originally designed for magazine-style text wrapping around images, it was widely used for layouts before flexbox and grid became available.",
        order_index: 1
      },
      {
        heading: "float: left and float: right",
        content: "float: left pushes the element to the left side of its container. float: right pushes it to the right. Floated elements are removed from the normal document flow but still affect surrounding content.",
        syntax_example: ".left-float {\n  float: left;\n  margin-right: 15px;\n}\n.right-float {\n  float: right;\n  margin-left: 15px;\n}",
        explanation: "Content flows around floated elements. Add margins to create space between the float and surrounding content.",
        order_index: 2
      },
      {
        heading: "float: none",
        content: "The default value. The element does not float and appears where it occurs in the normal document flow.",
        syntax_example: ".no-float {\n  float: none;\n}",
        explanation: "Used to reset or override float values, returning the element to normal flow.",
        order_index: 3
      },
      {
        heading: "Clearing Floats",
        content: "When elements float, they are removed from the normal flow, which can cause parent containers to collapse. The clear property prevents elements from appearing next to floated elements. Values: left (no floats on left), right (no floats on right), both (no floats on either side), none (default).",
        syntax_example: ".clearfix::after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.no-wrap {\n  clear: both;\n}",
        explanation: "The clearfix technique ensures parent containers properly contain their floated children.",
        order_index: 4
      },
      {
        heading: "Float Layout Example",
        content: "Before flexbox and grid, floats were commonly used for multi-column layouts. While no longer the preferred method, understanding floats is still valuable for maintaining legacy code.",
        syntax_example: ".sidebar {\n  float: left;\n  width: 30%;\n}\n.main-content {\n  float: right;\n  width: 65%;\n}\n.container::after {\n  content: '';\n  display: table;\n  clear: both;\n}",
        explanation: "This creates a two-column layout with sidebar and main content using floats.",
        order_index: 5
      },
      {
        heading: "Modern Alternatives",
        content: "Modern CSS provides better layout methods: Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts. These methods avoid float's quirks and clearing issues. Use floats primarily for their original purpose: wrapping text around images.",
        order_index: 6
      }
    ],
    "CSS Font Properties": [
      {
        heading: "font-family",
        content: "The font-family property specifies the typeface for text. It accepts a comma-separated list of font names, falling back to the next if the previous isn't available. Always end with a generic family (serif, sans-serif, monospace, cursive, fantasy) as a fallback.",
        syntax_example: ".text {\n  font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n.code {\n  font-family: 'Courier New', Courier, monospace;\n}",
        explanation: "Font names with spaces must be quoted. The browser tries each font in order until one is found.",
        order_index: 1
      },
      {
        heading: "font-size",
        content: "The font-size property sets the size of text. Values can be absolute (px, pt), relative (em, rem, %), keywords (small, medium, large), or viewport units (vw, vh). rem units are relative to the root element font size and are recommended for responsive design.",
        syntax_example: ".heading {\n  font-size: 32px;\n}\n.responsive {\n  font-size: 1.5rem;\n}\n.small-text {\n  font-size: 0.875em;\n}",
        explanation: "16px is the common browser default. 1rem = root font size. 1em = parent font size.",
        order_index: 2
      },
      {
        heading: "font-weight",
        content: "The font-weight property sets the thickness of text. Values can be keywords (normal, bold, lighter, bolder) or numeric (100-900 in increments of 100). 400 is normal, 700 is bold. Not all fonts support all weights.",
        syntax_example: ".normal { font-weight: normal; /* 400 */ }\n.bold { font-weight: bold; /* 700 */ }\n.light { font-weight: 300; }\n.extra-bold { font-weight: 800; }",
        explanation: "Numeric values provide finer control. Variable fonts support all values 100-900.",
        order_index: 3
      },
      {
        heading: "font-style",
        content: "The font-style property specifies the style of text. Values: normal (default), italic (uses italic version of font), oblique (slants the text, with optional angle).",
        syntax_example: ".normal { font-style: normal; }\n.italic { font-style: italic; }\n.oblique { font-style: oblique 10deg; }",
        explanation: "Italic uses the font's actual italic design. Oblique artificially slants the normal font.",
        order_index: 4
      },
      {
        heading: "font-variant",
        content: "The font-variant property controls typographic variants. Most common value is small-caps, which displays lowercase letters as smaller capital letters. Other values include normal, all-small-caps, petite-caps, etc.",
        syntax_example: ".small-caps {\n  font-variant: small-caps;\n}\n.all-small {\n  font-variant: all-small-caps;\n}",
        explanation: "small-caps is useful for acronyms, headings, and stylistic effects.",
        order_index: 5
      },
      {
        heading: "font Shorthand",
        content: "The font property is a shorthand for setting multiple font properties at once. Order: font-style, font-variant, font-weight, font-size/line-height, font-family. Font-size and font-family are required.",
        syntax_example: ".text {\n  font: italic small-caps bold 16px/1.5 Arial, sans-serif;\n}\n.simple {\n  font: 14px 'Georgia', serif;\n}",
        explanation: "The shorthand is compact but less readable. Line-height follows font-size with a slash.",
        order_index: 6
      },
      {
        heading: "text-transform",
        content: "While not technically a font property, text-transform changes the case of text. Values: none, uppercase, lowercase, capitalize (first letter of each word).",
        syntax_example: ".uppercase { text-transform: uppercase; }\n.lowercase { text-transform: lowercase; }\n.capitalize { text-transform: capitalize; }",
        explanation: "Useful for styling without changing the HTML content. The actual text in the DOM remains unchanged.",
        order_index: 7
      },
      {
        heading: "letter-spacing and word-spacing",
        content: "These properties control spacing between characters and words. letter-spacing adds space between letters (tracking). word-spacing adds space between words. Values can be in px, em, rem, etc.",
        syntax_example: ".spaced {\n  letter-spacing: 0.1em;\n  word-spacing: 0.3em;\n}\n.tight {\n  letter-spacing: -0.05em;\n}",
        explanation: "Positive values increase spacing, negative values decrease it. Useful for fine-tuning typography.",
        order_index: 8
      }
    ],
    "CSS Line Height Property": [
      {
        heading: "Understanding Line Height",
        content: "The line-height property sets the height of a line of text (the distance between baselines of consecutive lines). It controls vertical spacing within text blocks and is crucial for readability. It can also be used for vertical centering of single-line text.",
        order_index: 1
      },
      {
        heading: "Line Height Values",
        content: "line-height accepts several types of values: unitless numbers (recommended, multiplies the font-size), lengths (px, em, rem), percentages (relative to font-size), or the keyword 'normal' (usually around 1.2). Unitless values are preferred because they scale proportionally.",
        syntax_example: ".text1 { line-height: 1.5; /* Recommended */ }\n.text2 { line-height: 24px; }\n.text3 { line-height: 150%; }\n.text4 { line-height: normal; }",
        explanation: "1.5 means line height is 1.5 times the font size. This scales automatically with font size changes.",
        order_index: 2
      },
      {
        heading: "Line Height for Readability",
        content: "Proper line height improves readability. Body text typically uses 1.4-1.6 for comfortable reading. Headings often use tighter line-height (1.1-1.3) since they're larger and shorter. Very loose line-height (2.0+) can make text harder to follow.",
        syntax_example: "body {\n  font-size: 16px;\n  line-height: 1.5; /* 24px computed */\n}\nh1 {\n  font-size: 36px;\n  line-height: 1.2; /* 43.2px computed */\n}",
        explanation: "Larger font sizes need relatively smaller line-height ratios to maintain visual balance.",
        order_index: 3
      },
      {
        heading: "Vertical Centering with Line Height",
        content: "For single-line text, setting line-height equal to the element's height vertically centers the text. This technique only works for one line of text.",
        syntax_example: ".button {\n  height: 50px;\n  line-height: 50px; /* Centers text vertically */\n  text-align: center; /* Centers text horizontally */\n}",
        explanation: "When line-height equals height, the single line of text is vertically centered.",
        order_index: 4
      },
      {
        heading: "Inheritance and Calculation",
        content: "line-height is inherited from parent elements. Unitless values multiply the element's own font-size. Length values compute at the parent level and are inherited as fixed values. This is why unitless values are recommended.",
        syntax_example: "/* Bad: Children inherit 20px regardless of their font-size */\n.parent1 {\n  font-size: 16px;\n  line-height: 20px;\n}\n\n/* Good: Children multiply their own font-size by 1.5 */\n.parent2 {\n  font-size: 16px;\n  line-height: 1.5;\n}",
        explanation: "Unitless line-height adapts to each element's font-size, maintaining proportions throughout the cascade.",
        order_index: 5
      }
    ],
    "CSS Margin Property": [
      {
        heading: "Understanding Margin",
        content: "The margin property creates space outside an element's border, pushing other elements away. Margins are transparent and create empty space around elements. Unlike padding, margins can have negative values and can collapse in certain situations.",
        order_index: 1
      },
      {
        heading: "Margin Syntax",
        content: "Margin can be set with 1-4 values. One value: all sides. Two values: top/bottom, left/right. Three values: top, left/right, bottom. Four values: top, right, bottom, left (clockwise from top).",
        syntax_example: ".box1 { margin: 20px; /* All sides */ }\n.box2 { margin: 10px 20px; /* V H */ }\n.box3 { margin: 10px 15px 20px; /* T H B */ }\n.box4 { margin: 10px 15px 20px 25px; /* T R B L */ }",
        explanation: "The shorthand notation reduces code repetition. Remember: trouble (TRBL) for four-value order.",
        order_index: 2
      },
      {
        heading: "Individual Margin Properties",
        content: "You can set each side independently: margin-top, margin-right, margin-bottom, margin-left. This provides explicit control when you need different values for each side.",
        syntax_example: ".box {\n  margin-top: 20px;\n  margin-right: 15px;\n  margin-bottom: 10px;\n  margin-left: 5px;\n}",
        explanation: "Individual properties are more verbose but clearer when sides need different values.",
        order_index: 3
      },
      {
        heading: "Margin Auto and Centering",
        content: "Setting left and right margins to 'auto' centers a block-level element horizontally within its container. The element must have a defined width. Top and bottom auto margins evaluate to 0.",
        syntax_example: ".centered {\n  width: 500px;\n  margin: 0 auto; /* Centers horizontally */\n}\n.centered-alt {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}",
        explanation: "The browser distributes available space equally on left and right, centering the element.",
        order_index: 4
      },
      {
        heading: "Negative Margins",
        content: "Negative margins pull elements in the opposite direction, moving them closer to or overlapping adjacent elements. They can create overlapping layouts and pull elements outside their containers.",
        syntax_example: ".overlap {\n  margin-top: -20px; /* Moves up */\n  margin-left: -10px; /* Moves left */\n}\n.pull-content {\n  margin: -30px;\n}",
        explanation: "Negative margins are powerful but can break layouts if overused. Use carefully.",
        order_index: 5
      },
      {
        heading: "Margin Collapse",
        content: "Vertical margins (top and bottom) between adjacent block elements collapse, meaning they combine into a single margin equal to the larger of the two. This doesn't happen with horizontal margins or when elements are floated, absolutely positioned, or inside flex/grid containers.",
        syntax_example: ".box1 { margin-bottom: 30px; }\n.box2 { margin-top: 20px; }\n/* The gap between box1 and box2 is 30px, not 50px */",
        explanation: "Margin collapse can be surprising. The margins merge rather than add together.",
        order_index: 6
      },
      {
        heading: "Preventing Margin Collapse",
        content: "Margin collapse can be prevented by: adding border or padding to the parent, using overflow: auto on the parent, making the parent a flex or grid container, or using display: flow-root on the parent.",
        syntax_example: ".parent {\n  display: flow-root; /* Modern solution */\n}\n.parent-alt {\n  padding: 1px; /* Or any padding */\n}",
        explanation: "display: flow-root is the cleanest modern solution to prevent margin collapse.",
        order_index: 7
      },
      {
        heading: "Percentage Margins",
        content: "Percentage margins are calculated relative to the width of the containing block, even for top and bottom margins. This can be counterintuitive but enables interesting responsive designs.",
        syntax_example: ".responsive-margin {\n  margin: 5%; /* All sides relative to container width */\n}\n.aspect-ratio {\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 aspect ratio */\n}",
        explanation: "Percentage margins scale with container width, maintaining proportional spacing.",
        order_index: 8
      }
    ],
    "CSS Opacity Property": [
      {
        heading: "Understanding Opacity",
        content: "The opacity property sets the transparency level of an element. It affects the entire element including all its children, content, borders, and backgrounds. Values range from 0 (completely transparent) to 1 (completely opaque). Decimal values like 0.5 are allowed.",
        syntax_example: ".transparent { opacity: 0; /* Invisible */ }\n.semi-transparent { opacity: 0.5; /* Half */ }\n.slight-fade { opacity: 0.8; }\n.opaque { opacity: 1; /* Fully visible */ }",
        explanation: "0 makes the element invisible but it still occupies space in the layout, unlike display: none.",
        order_index: 1
      },
      {
        heading: "Opacity vs RGBA/HSLA",
        content: "While opacity affects the entire element and its children, RGBA and HSLA color values apply transparency only to the specific property (like background-color or color) without affecting children.",
        syntax_example: "/* Affects entire element and children */\n.with-opacity {\n  background-color: blue;\n  opacity: 0.5;\n}\n\n/* Only affects background, children unaffected */\n.with-rgba {\n  background-color: rgba(0, 0, 255, 0.5);\n}",
        explanation: "Use RGBA/HSLA for transparent backgrounds while keeping text fully opaque. Use opacity for fading entire elements.",
        order_index: 2
      },
      {
        heading: "Opacity in Hover Effects",
        content: "Opacity is commonly used in hover effects to indicate interactivity. Buttons, images, and links often use opacity changes to provide visual feedback.",
        syntax_example: ".button {\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.button:hover {\n  opacity: 0.7;\n}\n.image {\n  opacity: 0.8;\n}\n.image:hover {\n  opacity: 1;\n}",
        explanation: "The transition property creates smooth opacity changes. This improves user experience.",
        order_index: 3
      },
      {
        heading: "Opacity for Overlays",
        content: "Opacity is perfect for creating overlay effects, like darkening backgrounds behind modals or lightboxes. Combined with positioning, it creates professional-looking overlays.",
        syntax_example: ".overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.5;\n  z-index: 100;\n}",
        explanation: "This creates a semi-transparent black overlay covering the entire viewport.",
        order_index: 4
      },
      {
        heading: "Performance Considerations",
        content: "Opacity changes can be hardware-accelerated by browsers, making them performant for animations. However, semi-transparent elements require more rendering work. Elements with opacity values other than 1 create new stacking contexts.",
        order_index: 5
      },
      {
        heading: "Accessibility with Opacity",
        content: "Be cautious with opacity for text. Very transparent text (below 0.6) can be hard to read and fails accessibility guidelines. Ensure sufficient contrast ratios. Don't rely solely on opacity changes to convey information.",
        syntax_example: "/* Poor accessibility */\n.bad { opacity: 0.3; }\n\n/* Better - readable transparency */\n.good { opacity: 0.8; }",
        explanation: "Text with opacity below 0.6 often fails WCAG contrast requirements.",
        order_index: 6
      }
    ],
    "CSS Overflow Property": [
      {
        heading: "Understanding Overflow",
        content: "The overflow property controls what happens to content that is too large to fit within an element's box. It determines whether to clip content, show scrollbars, or let content overflow visibly. This is essential for controlling layout behavior when content size is unpredictable.",
        order_index: 1
      },
      {
        heading: "overflow: visible",
        content: "The default value. Content is not clipped and may overflow the element's box, rendering outside its boundaries. This can cause layout issues but ensures no content is hidden.",
        syntax_example: ".box {\n  width: 200px;\n  height: 100px;\n  overflow: visible; /* Default */\n}",
        explanation: "Overflowing content extends beyond the element's boundaries and may overlap other elements.",
        order_index: 2
      },
      {
        heading: "overflow: hidden",
        content: "Content that overflows the element's box is clipped and becomes invisible. No scrollbars are shown. This is useful for hiding excess content or creating certain layout effects. It also establishes a new block formatting context.",
        syntax_example: ".box {\n  width: 200px;\n  height: 100px;\n  overflow: hidden;\n}",
        explanation: "Hidden overflow clips content. Use for image containers, clearing floats, or hiding overflow intentionally.",
        order_index: 3
      },
      {
        heading: "overflow: scroll",
        content: "Scrollbars are always shown, even if content doesn't overflow. This reserves space for scrollbars which can affect layout. Users can scroll to see clipped content.",
        syntax_example: ".box {\n  width: 200px;\n  height: 100px;\n  overflow: scroll;\n}",
        explanation: "Always shows scrollbars (or scrollbar space), which can look awkward if content fits without scrolling.",
        order_index: 4
      },
      {
        heading: "overflow: auto",
        content: "Scrollbars appear only when needed (when content overflows). This is usually the preferred value for scrollable containers as it adapts to content size.",
        syntax_example: ".box {\n  width: 200px;\n  height: 100px;\n  overflow: auto;\n}",
        explanation: "auto is most flexible - scrollbars appear only when content actually overflows.",
        order_index: 5
      },
      {
        heading: "overflow-x and overflow-y",
        content: "These properties control overflow independently for horizontal (x) and vertical (y) directions. This allows different behaviors for each axis.",
        syntax_example: ".box {\n  width: 200px;\n  height: 100px;\n  overflow-x: hidden; /* No horizontal scroll */\n  overflow-y: auto; /* Vertical scroll if needed */\n}",
        explanation: "Controlling axes separately is useful for specific layout requirements like horizontal cards with vertical scrolling.",
        order_index: 6
      },
      {
        heading: "overflow: clip",
        content: "Similar to hidden but provides no programmatic scrolling mechanism. Content is strictly clipped to the element's padding box. This is newer and not supported in older browsers.",
        syntax_example: ".box {\n  width: 200px;\n  height: 100px;\n  overflow: clip;\n}",
        explanation: "clip prevents all scrolling, even programmatic scrolling via JavaScript.",
        order_index: 7
      },
      {
        heading: "Text Overflow",
        content: "For text specifically, combine overflow with text-overflow and white-space to create ellipsis effects (text that's cut off with '...').",
        syntax_example: ".truncate {\n  width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
        explanation: "This trio of properties creates the classic truncated text with ellipsis effect.",
        order_index: 8
      },
      {
        heading: "Overflow and Block Formatting Context",
        content: "Using overflow values other than 'visible' creates a new block formatting context. This contains floats and prevents margin collapse, similar to display: flow-root.",
        syntax_example: ".clearfix {\n  overflow: auto; /* Contains floated children */\n}",
        explanation: "overflow: hidden or auto is an old technique for clearing floats, though display: flow-root is now preferred.",
        order_index: 9
      }
    ],
    "CSS Padding Property": [
      {
        heading: "Understanding Padding",
        content: "The padding property creates space inside an element's border, between the border and the content. Padding is part of the element's background and shows the element's background color or image. Unlike margin, padding cannot be negative and doesn't collapse.",
        order_index: 1
      },
      {
        heading: "Padding Syntax",
        content: "Like margin, padding accepts 1-4 values. One value: all sides. Two values: top/bottom, left/right. Three values: top, left/right, bottom. Four values: top, right, bottom, left (clockwise from top).",
        syntax_example: ".box1 { padding: 20px; /* All sides */ }\n.box2 { padding: 10px 20px; /* V H */ }\n.box3 { padding: 10px 15px 20px; /* T H B */ }\n.box4 { padding: 10px 15px 20px 25px; /* T R B L */ }",
        explanation: "Padding shorthand works identically to margin shorthand. Same clockwise pattern.",
        order_index: 2
      },
      {
        heading: "Individual Padding Properties",
        content: "Each side can be set independently: padding-top, padding-right, padding-bottom, padding-left. This provides explicit control for asymmetric padding.",
        syntax_example: ".box {\n  padding-top: 20px;\n  padding-right: 15px;\n  padding-bottom: 20px;\n  padding-left: 15px;\n}",
        explanation: "Individual properties are clearer when documenting why specific sides have specific values.",
        order_index: 3
      },
      {
        heading: "Padding and Box Sizing",
        content: "By default (box-sizing: content-box), padding adds to an element's declared width and height. With box-sizing: border-box, padding is included within the declared dimensions. Border-box is generally preferred for predictable sizing.",
        syntax_example: "/* Default: Total width = 300px + 40px = 340px */\n.content-box {\n  box-sizing: content-box;\n  width: 300px;\n  padding: 20px;\n}\n\n/* Border-box: Total width = 300px */\n.border-box {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px; /* Content area shrinks */\n}",
        explanation: "border-box makes sizing more intuitive. Many developers apply it globally with the universal selector.",
        order_index: 4
      },
      {
        heading: "Percentage Padding",
        content: "Percentage padding is calculated relative to the width of the containing block, even for top and bottom padding. This is the same behavior as margin and enables aspect ratio tricks.",
        syntax_example: ".card {\n  padding: 5%; /* All sides relative to container width */\n}\n\n/* Aspect ratio box using padding */\n.video-container {\n  width: 100%;\n  padding-bottom: 56.25%; /* 16:9 ratio */\n  position: relative;\n}",
        explanation: "Percentage padding scaling with width (not height) enables responsive aspect ratios.",
        order_index: 5
      },
      {
        heading: "Padding for Clickable Area",
        content: "Padding increases the clickable/touchable area of interactive elements like buttons and links, improving usability especially on mobile devices. Good padding makes interfaces more user-friendly.",
        syntax_example: ".button {\n  padding: 12px 24px;\n  background-color: blue;\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n.link {\n  padding: 8px 12px;\n  display: inline-block;\n}",
        explanation: "Adequate padding makes buttons and links easier to click, especially on touchscreens.",
        order_index: 6
      },
      {
        heading: "Padding vs Margin",
        content: "Padding is inside the border and shows the element's background. Margin is outside the border and is always transparent. Padding affects the element's clickable area; margin doesn't. Use padding for internal spacing, margin for external spacing between elements.",
        order_index: 7
      }
    ]
  }
};

export const javascriptContent = {
  "Introduction to JavaScript": [
    {
      heading: "What is JavaScript?",
      content: "JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It enables interactive web pages and is an essential part of web applications. JavaScript runs in web browsers without requiring compilation and can also run on servers using environments like Node.js.",
      order_index: 1
    },
    {
      heading: "History of JavaScript",
      content: "JavaScript was created by Brendan Eich in 1995 while working at Netscape Communications. Initially called Mocha, then LiveScript, it was renamed JavaScript for marketing reasons. Despite the name similarity, JavaScript and Java are completely different languages. JavaScript was standardized as ECMAScript (ES) in 1997. Modern JavaScript follows the ECMAScript specification with regular updates (ES6/ES2015, ES2016, etc.).",
      order_index: 2
    },
    {
      heading: "Role in Web Development",
      content: "In web development, HTML provides structure, CSS provides presentation, and JavaScript provides behavior and interactivity. JavaScript can manipulate HTML and CSS, respond to user actions, communicate with servers, store data locally, and create complex web applications. It's the only programming language that runs natively in web browsers.",
      order_index: 3
    }
  ],
  "Features of JavaScript": [
    {
      heading: "Interpreted Language",
      content: "JavaScript is an interpreted language, meaning code is executed line-by-line by the browser's JavaScript engine without needing prior compilation. This makes development faster but execution can be slower than compiled languages. Modern engines use Just-In-Time (JIT) compilation for better performance.",
      order_index: 1
    },
    {
      heading: "Dynamically Typed",
      content: "JavaScript is dynamically typed, meaning variables don't have fixed types. The same variable can hold different types of values at different times. Type checking happens at runtime, not compile time. This provides flexibility but can lead to runtime errors if not careful.",
      order_index: 2
    },
    {
      heading: "Object-Oriented",
      content: "JavaScript supports object-oriented programming using prototypes and (from ES6) classes. Everything in JavaScript (except primitives) is an object. It supports concepts like encapsulation, inheritance (prototype-based), and polymorphism.",
      order_index: 3
    },
    {
      heading: "Functional Programming",
      content: "JavaScript supports functional programming paradigms. Functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions. JavaScript supports higher-order functions, closures, and arrow functions.",
      order_index: 4
    },
    {
      heading: "Event-Driven",
      content: "JavaScript uses an event-driven programming model. Code can respond to events like clicks, key presses, page loads, etc. Event listeners wait for events to occur and execute callback functions in response. This is fundamental to interactive web applications.",
      order_index: 5
    },
    {
      heading: "Single-Threaded with Async Support",
      content: "JavaScript is single-threaded but supports asynchronous operations through callbacks, promises, and async/await. The event loop manages asynchronous operations, allowing non-blocking code execution. This enables handling multiple operations without freezing the browser.",
      order_index: 6
    },
    {
      heading: "Cross-Platform",
      content: "JavaScript runs on all major operating systems and browsers. The same code generally works across different platforms. Beyond browsers, JavaScript runs on servers (Node.js), mobile apps (React Native), desktop apps (Electron), and IoT devices.",
      order_index: 7
    }
  ],
  "Applications of JavaScript": [
    {
      heading: "Web Development",
      content: "JavaScript's primary application is creating interactive web pages. It can manipulate DOM elements, handle user interactions, validate forms, create animations, and dynamically update content without page reloads. It powers modern single-page applications (SPAs).",
      order_index: 1
    },
    {
      heading: "Web Applications",
      content: "Complex web applications like Gmail, Google Maps, Facebook, and Netflix rely heavily on JavaScript. Frameworks like React, Angular, and Vue.js enable building sophisticated user interfaces. JavaScript handles routing, state management, and real-time updates.",
      order_index: 2
    },
    {
      heading: "Server-Side Development",
      content: "Node.js allows JavaScript to run on servers, enabling full-stack JavaScript development. Developers can use the same language for frontend and backend. Node.js is used for REST APIs, real-time applications (chat, gaming), microservices, and server-side rendering.",
      order_index: 3
    },
    {
      heading: "Mobile Applications",
      content: "Frameworks like React Native, Ionic, and NativeScript use JavaScript to build native mobile apps for iOS and Android. One codebase can deploy to multiple platforms. JavaScript is also used in Progressive Web Apps (PWAs) that work across devices.",
      order_index: 4
    },
    {
      heading: "Desktop Applications",
      content: "Electron framework enables building cross-platform desktop applications using JavaScript, HTML, and CSS. Popular apps like VS Code, Slack, Discord, and Atom are built with Electron. These apps run on Windows, macOS, and Linux from a single codebase.",
      order_index: 5
    },
    {
      heading: "Game Development",
      content: "JavaScript is used for browser-based games using HTML5 Canvas, WebGL, and game engines like Phaser and Three.js. It enables 2D and 3D games that run directly in browsers without plugins. Multiplayer games use JavaScript with WebSockets for real-time communication.",
      order_index: 6
    },
    {
      heading: "Internet of Things (IoT)",
      content: "JavaScript runs on IoT devices using platforms like Johnny-Five and Node-RED. It can control hardware like Arduino and Raspberry Pi, create automation systems, and build smart home applications.",
      order_index: 7
    }
  ],
  "How to Add JavaScript": [
    {
      heading: "Three Ways to Add JavaScript",
      content: "JavaScript can be added to HTML documents in three ways: Inline (directly in HTML elements using event attributes), Embedded (using <script> tags within HTML), and External (linking to separate .js files). Each method has specific use cases and best practices.",
      order_index: 1
    },
    {
      heading: "Inline JavaScript",
      content: "Inline JavaScript is written directly in HTML element attributes like onclick, onload, onmouseover, etc. This method mixes HTML and JavaScript, violating separation of concerns. It's generally discouraged except for quick tests or very simple interactions.",
      syntax_example: "<button onclick=\"alert('Hello!')\">Click Me</button>\n\n<a href=\"#\" onclick=\"console.log('Clicked'); return false;\">Link</a>",
      explanation: "JavaScript code is embedded in HTML attributes. Not recommended for production code as it's hard to maintain.",
      order_index: 2
    },
    {
      heading: "Embedded JavaScript",
      content: "JavaScript code is placed inside <script> tags within the HTML document. Scripts in the <head> run before the page loads. Scripts at the end of <body> run after HTML is parsed. This method keeps JavaScript and HTML in one file, useful for page-specific scripts.",
      syntax_example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Page</title>\n  <script>\n    // Script runs when encountered\n    console.log('In head');\n  </script>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <script>\n    // Script runs after h1 is loaded\n    console.log('In body');\n  </script>\n</body>\n</html>",
      explanation: "Scripts in <head> may block rendering. Scripts at end of <body> run after DOM is ready.",
      order_index: 3
    },
    {
      heading: "External JavaScript Files",
      content: "JavaScript code is written in separate .js files and linked using the <script> tag's src attribute. This is the recommended approach for production code. Benefits include code reusability, browser caching, better organization, and separation of concerns.",
      syntax_example: "<!-- In HTML file -->\n<script src=\"script.js\"></script>\n<script src=\"js/app.js\"></script>\n<script src=\"https://cdn.example.com/library.js\"></script>\n\n/* In script.js file */\nconsole.log('Hello from external file');\n\nfunction greet(name) {\n  alert('Hello, ' + name);\n}",
      explanation: "External files are cached by browsers, improving performance. One file can be used across multiple pages.",
      order_index: 4
    },
    {
      heading: "Script Placement Best Practices",
      content: "Place scripts at the end of <body> for better performance (page content loads first). Use the defer attribute for scripts that need the full DOM but can load asynchronously. Use async for independent scripts that don't depend on DOM or other scripts.",
      syntax_example: "<!-- Regular: Blocks parsing -->\n<script src=\"app.js\"></script>\n\n<!-- Defer: Loads in parallel, executes after DOM -->\n<script src=\"app.js\" defer></script>\n\n<!-- Async: Loads and executes asynchronously -->\n<script src=\"analytics.js\" async></script>",
      explanation: "defer and async improve page load performance by preventing blocking. defer maintains script order.",
      order_index: 5
    },
    {
      heading: "Multiple Script Files",
      content: "You can include multiple JavaScript files. They execute in order (unless async is used). Later scripts can access variables and functions from earlier scripts. Organize code across multiple files for better maintainability.",
      syntax_example: "<!-- Order matters -->\n<script src=\"library.js\"></script>\n<script src=\"config.js\"></script>\n<script src=\"app.js\"></script>",
      explanation: "Scripts execute in the order they appear. Dependencies must be loaded before dependent code.",
      order_index: 6
    },
    {
      heading: "Module Scripts",
      content: "Modern JavaScript supports ES6 modules with the type='module' attribute. Modules have their own scope (not global), use import/export syntax, and always defer by default. They enable better code organization and dependency management.",
      syntax_example: "<!-- Module script -->\n<script type=\"module\" src=\"app.js\"></script>\n\n/* In app.js */\nimport { greet } from './utils.js';\nimport React from 'react';\n\nexport function main() {\n  greet('World');\n}",
      explanation: "Modules have strict mode by default and support import/export for better code organization.",
      order_index: 7
    }
  ],
  "JavaScript Comments": [
    {
      heading: "Purpose of Comments",
      content: "Comments are notes in code that are ignored by the JavaScript engine. They explain code logic, document functions and variables, temporarily disable code during debugging, and provide reminders or to-do notes. Good comments explain 'why' rather than 'what' the code does.",
      order_index: 1
    },
    {
      heading: "Single-Line Comments",
      content: "Single-line comments start with // and continue to the end of the line. Everything after // on that line is ignored. Commonly used for brief explanations, disabling single lines of code, or inline documentation.",
      syntax_example: "// This is a single-line comment\nlet x = 5; // Comments can also go here\n\n// Temporarily disable code:\n// console.log('This will not run');\n\n// TODO: Implement error handling",
      explanation: "// creates comments that end at the line break. Quick and commonly used.",
      order_index: 2
    },
    {
      heading: "Multi-Line Comments",
      content: "Multi-line comments start with /* and end with */. Everything between is ignored, even across multiple lines. Used for longer explanations, function documentation, and commenting out blocks of code.",
      syntax_example: "/* This is a multi-line comment\n   that spans multiple lines\n   and can include lots of text */\n\nfunction calculate(a, b) {\n  /* \n   * This function adds two numbers\n   * Parameters: a (number), b (number)\n   * Returns: number\n   */\n  return a + b;\n}\n\n/* Temporarily disable block:\nfunction oldCode() {\n  console.log('Not used anymore');\n}\n*/",
      explanation: "/* */ is useful for longer explanations and commenting out multiple lines at once.",
      order_index: 3
    },
    {
      heading: "JSDoc Comments",
      content: "JSDoc is a documentation standard using specially formatted multi-line comments. It provides structured documentation for functions, parameters, return types, and more. Many editors and tools can parse JSDoc for autocomplete and documentation generation.",
      syntax_example: "/**\n * Calculates the sum of two numbers\n * @param {number} a - The first number\n * @param {number} b - The second number\n * @returns {number} The sum of a and b\n * @example\n * add(5, 3); // Returns 8\n */\nfunction add(a, b) {\n  return a + b;\n}",
      explanation: "/** */ with @ tags creates structured documentation. IDEs use this for hints and autocomplete.",
      order_index: 4
    },
    {
      heading: "Commenting Best Practices",
      content: "Write self-documenting code with clear variable and function names. Comment the 'why' not the 'what'. Keep comments up-to-date with code changes. Remove obsolete comments. Use TODO, FIXME, HACK, NOTE conventions. Don't over-comment obvious code. Document complex algorithms and business logic.",
      syntax_example: "// Bad: Obvious comment\nlet count = 0; // Set count to zero\n\n// Good: Explains why\nlet retryCount = 0; // Max 3 retries due to API rate limit\n\n// Good: Complex logic explanation\n// Use binary search because array is sorted and large (10000+ items)\n// Linear search would be O(n), binary search is O(log n)",
      explanation: "Good comments add value by explaining context, decisions, and complex logic.",
      order_index: 5
    }
  ],
  "JavaScript Variables": [
    {
      heading: "Understanding Variables",
      content: "Variables are containers for storing data values. They give names to data so it can be referenced and manipulated throughout the program. JavaScript variables are declared using var, let, or const keywords. Modern JavaScript prefers let and const over var.",
      order_index: 1
    },
    {
      heading: "Variable Declaration with let",
      content: "The let keyword declares block-scoped variables. Variables declared with let can be reassigned but not redeclared in the same scope. let is the preferred way to declare variables that will change. It was introduced in ES6 (2015).",
      syntax_example: "let age = 25;\nlet name = 'John';\nlet isStudent = true;\n\n// Can reassign\nage = 26;\n\n// Block-scoped\nif (true) {\n  let message = 'Hello';\n}\n// message is not accessible here",
      explanation: "let creates variables that can change and are limited to the block where they're defined.",
      order_index: 2
    },
    {
      heading: "Variable Declaration with const",
      content: "The const keyword declares block-scoped constants. Variables declared with const cannot be reassigned. They must be initialized when declared. However, if the value is an object or array, its properties/elements can still be modified. Use const by default unless you need to reassign.",
      syntax_example: "const PI = 3.14159;\nconst MAX_SIZE = 100;\n\n// Error: Cannot reassign\n// PI = 3.14;\n\n// Objects/arrays can be modified\nconst person = { name: 'John' };\nperson.name = 'Jane'; // OK\nperson.age = 30; // OK\n\nconst numbers = [1, 2, 3];\nnumbers.push(4); // OK",
      explanation: "const prevents reassignment but doesn't make objects/arrays immutable. Their contents can change.",
      order_index: 3
    },
    {
      heading: "Variable Declaration with var",
      content: "The var keyword is the old way to declare variables. Variables declared with var are function-scoped (not block-scoped), can be redeclared, and are hoisted. Modern code should avoid var in favor of let and const.",
      syntax_example: "var count = 10;\nvar name = 'Alice';\n\n// Can redeclare (not recommended)\nvar count = 20;\n\n// Function-scoped, not block-scoped\nif (true) {\n  var message = 'Hello';\n}\nconsole.log(message); // Works (but shouldn't)",
      explanation: "var has confusing scoping rules. Prefer let and const in modern JavaScript.",
      order_index: 4
    },
    {
      heading: "Variable Naming Rules",
      content: "Variable names must start with a letter, underscore (_), or dollar sign ($). Subsequent characters can also include digits. Names are case-sensitive. Names cannot be reserved keywords. Use camelCase convention for multi-word names. Choose descriptive names that indicate the variable's purpose.",
      syntax_example: "// Valid names\nlet firstName = 'John';\nlet _private = 42;\nlet $element = document.body;\nlet user123 = 'active';\n\n// Invalid names\n// let 123user; // Cannot start with number\n// let user-name; // Cannot contain hyphen\n// let class; // Cannot use reserved word",
      explanation: "Follow naming rules and conventions for readable, maintainable code.",
      order_index: 5
    },
    {
      heading: "Local Variables",
      content: "Local variables are declared inside functions or blocks. They are only accessible within their scope and are destroyed when the function/block completes. Local variables have precedence over global variables with the same name.",
      syntax_example: "function calculate() {\n  let result = 10 * 5; // Local to calculate\n  return result;\n}\n\nconsole.log(result); // Error: result is not defined\n\nif (true) {\n  let blockVar = 'local'; // Local to if block\n}",
      explanation: "Local variables are confined to their block/function scope and don't pollute the global namespace.",
      order_index: 6
    },
    {
      heading: "Global Variables",
      content: "Global variables are declared outside any function or block. They are accessible from anywhere in the script. In browsers, global variables become properties of the window object. Minimize global variables to avoid conflicts and namespace pollution.",
      syntax_example: "let globalVar = 'accessible everywhere';\n\nfunction test() {\n  console.log(globalVar); // Can access\n}\n\nif (true) {\n  console.log(globalVar); // Can access\n}\n\n// In browser:\nconsole.log(window.globalVar); // Same variable",
      explanation: "Global variables are convenient but can cause naming conflicts. Use sparingly and prefer modules.",
      order_index: 7
    },
    {
      heading: "Variable Hoisting",
      content: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope. var declarations are hoisted and initialized to undefined. let and const declarations are hoisted but not initialized (temporal dead zone). Function declarations are fully hoisted.",
      syntax_example: "// var is hoisted\nconsole.log(x); // undefined (not error)\nvar x = 5;\n\n// let/const not initialized when hoisted\n// console.log(y); // Error: Cannot access before initialization\nlet y = 10;\n\n// Functions are fully hoisted\ngreet(); // Works!\nfunction greet() {\n  console.log('Hello');\n}",
      explanation: "Hoisting can be confusing. Declare variables at the top of their scope to avoid issues.",
      order_index: 8
    }
  ]
};

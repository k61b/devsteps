---
title: "Your First JavaScript Program"
description: "Writing and running your first JavaScript code"
type: "reading"
duration: "25 min"
day: 1
order: 3
nextLesson: "variables-and-data-types"
---

# Your First JavaScript Program

It's time to write real code! In this lesson you'll create your very first JavaScript program, run it in both the browser and Node.js, and learn how to spot and fix simple errors.

## Step 1: Create a Project Folder

Keeping each mini-project inside its own folder makes it easier to stay organized and track files as your course progresses. From the terminal:

```bash
cd devsteps-js
mkdir hello-world
cd hello-world
```

Then open the folder in VS Code (`code .` on macOS/Linux or via the Explorer on Windows). Opening the folder (instead of individual files) lets VS Code understand your project structure, remember recently opened files, and run commands relative to the folder.

## Step 2: Create `app.js`

Inside the folder add a new file called `app.js`. The `.js` ending tells tools and editors that this file contains JavaScript. Type the following code:

```javascript
// app.js
console.log("Welcome to JavaScript!");
```

`console.log` is a built-in function that prints text or values. Developers use it constantly to understand what code is doing, check the value of variables, or leave temporary notes while debugging. We'll see it in action in the next steps.

## Step 3: Run Code in the Browser

Browsers execute JavaScript whenever you include it in an HTML page. HTML provides the structure, while the `<script>` tag tells the browser to load and run JavaScript code.

- Create a file called `index.html` in the same folder.
- Paste this starter HTML:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello JavaScript</title>
  </head>
  <body>
    <h1>Hello from the browser!</h1>
    <script src="./app.js"></script>
  </body>
</html>
```

- Open `index.html` in your browser (double-click the file or use the VS Code Live Server extension).
- Open DevTools (`Ctrl+Shift+I` / `Cmd+Option+I`) and click the **Console** tab. The developer console is like a built-in terminal for the browser—every `console.log` from your scripts appears here, and you can run JavaScript interactively.

You should see `Welcome to JavaScript!` printed in the console. Every time you refresh the page the script runs again. If you ever wonder whether your code executed, check this console first.

## Step 4: Run Code with Node.js

The same `app.js` file can run directly in Node.js using your terminal. Node.js gives JavaScript access to your computer (files, network, etc.) instead of the browser window, which makes it ideal for tooling and server-side code.

```bash
node app.js
```

You'll see the same message printed. This is the same JavaScript language, just running in a different environment. In Node.js there is no DOM or browser APIs, but you gain access to modules that interact with your operating system.

> Try changing the message in `app.js`, save the file, and rerun `node app.js`. Seeing instant feedback will help you develop a tight edit → run → verify loop.

## Step 5: Add a Variable and Basic Logic

Update your file to store data and make decisions:

```javascript
const learnerName = "Jordan";
const completedLesson = true;

if (completedLesson) {
  console.log(`Great job, ${learnerName}! You're ready for the next step.`);
} else {
  console.log(`Hi ${learnerName}, finish the lesson before moving on.`);
}
```

Notice the template literal with backticks (`` ` ``) — it lets you embed variables inside strings using `${ }`.

Run the file again in both the browser and Node.js to see the output. Try changing `completedLesson` to `false`, or swap the `const` keywords for `let` to see that both are valid (even though `const` is preferred when values don't change).

## Step 6: Debugging Common Errors

Mistakes happen! Understanding the error message is the fastest way to recover.

### Read the stack trace
When JavaScript encounters a fatal error it stops execution and prints a stack trace. The last line usually shows the file name and line number. Click it to jump straight to the problem in VS Code or DevTools.

### Common beginner errors
- **Missing quotes**: `console.log(Welcome);` → SyntaxError because strings need quotes (`"Welcome"` or `'Welcome'`).
- **Unmatched parentheses or braces**: Every `(` needs `)`, every `{` needs `}`. Editors highlight matching pairs; use that to your advantage.
- **Case sensitivity**: `Console.log` is different from `console.log`. JavaScript treats uppercase and lowercase letters as unique characters.
- **Saved files**: If nothing changes, make sure you saved the file and that you're running the correct path (Node prints an error if the file name is wrong).
- **Typos in file names**: Browsers and Node are case-sensitive on most systems. `App.js` is not the same as `app.js`.

Practice reading the error line by line. You'll start to recognize patterns quickly, and no developer is immune to typos—fixing them is part of the job.

## Step 7: Explore the Console

In DevTools you can run JavaScript directly. It's a safe playground to test ideas before committing them to your files.

```javascript
2 + 2
Math.random()
console.log("Testing from DevTools!")
```

You can also access variables from the current page (e.g., typing `learnerName` after the script runs). This is incredibly useful for inspecting state without modifying code.

## Key Takeaways

- ✅ JavaScript runs the same way in browsers and Node.js with minor environment differences.
- ✅ `console.log` is the fastest way to inspect values and follow program flow.
- ✅ Variables plus `if/else` let you build logic even in tiny programs by reacting to data.
- ✅ Errors are normal—read the stack trace, identify the line, and fix one issue at a time.

---

## 🎯 Quick Check

1. Which HTML tag loads an external JavaScript file into a page, and why do we place it near the bottom of the body in simple demos?
2. How do you run `app.js` using Node.js, and what environment differences should you expect compared to the browser?
3. What message appears if `completedLesson` is set to `false`, and how could you change the logic to support more than two outcomes?
4. Name one common error, interpret the stack trace, and describe how you would fix it.

Confident with these answers? You're ready to dive into variables and data types next!
Let's unpack the new pieces:

- `const` creates a variable that cannot be reassigned. Use it when the reference should stay the same.
- `"Jordan"` is a string (text) value.
- `true` is a boolean value. JavaScript has only two booleans: `true` and `false`.
- The `if` statement checks a condition. If it is truthy, the first block runs; otherwise the `else` block runs. Only one branch executes each time.
- Template literals (the text wrapped in backticks) let us embed variables such as `${learnerName}` inside strings without using `+`.

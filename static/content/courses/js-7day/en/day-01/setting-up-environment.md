---
title: "Setting Up Your Environment"
description: "Installing necessary tools and setting up your development environment"
type: "reading"
duration: "20 min"
day: 1
order: 2
nextLesson: "first-javascript-program"
---

# Setting Up Your Environment

Before you can start writing JavaScript, you need a reliable development environment. In this lesson you'll install the key tools we will use throughout the course and make sure everything runs correctly.

## Step 1: Pick Your Code Editor

We recommend **Visual Studio Code (VS Code)** because it's free, lightweight, and packed with features that help beginners.

1. Download VS Code from [https://code.visualstudio.com](https://code.visualstudio.com) for your operating system (Windows, macOS, or Linux).
2. Install it using the default options.
3. Launch the app and sign in if you want to sync settings (optional).

### Recommended VS Code Extensions
- **ESLint** – highlights common JavaScript errors.
- **Prettier** – formats your code automatically.
- **Code Spell Checker** – helps catch typos in comments and strings.

> Tip: Install extensions by clicking the square icon in the left sidebar or pressing `Ctrl+Shift+X` (`Cmd+Shift+X` on macOS).

## Step 2: Install Node.js with NVM

Node.js lets you run JavaScript outside the browser and gives you the `npm` package manager, which we'll use later. Instead of installing Node.js directly, we'll use **NVM (Node Version Manager)** so you can switch versions easily as you work on different projects.

### macOS and Linux
1. Install NVM by running the official script:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```
2. Reload your shell so the `nvm` command is available:
   ```bash
   source ~/.nvm/nvm.sh
   ```
3. Install the latest Long-Term Support (LTS) version of Node.js:
   ```bash
   nvm install --lts
   nvm use --lts
   nvm alias default --lts
   ```

### Windows
1. Download the latest `nvm-setup.exe` from the [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases).
2. Run the installer and accept the defaults (it installs both NVM and a Node.js directory).
3. Open a new PowerShell or Windows Terminal window and install the current LTS release:
   ```powershell
   nvm ls available   # optional: shows the list of versions
   nvm install 20.11.1   # replace with the highest LTS version you see in the list
   nvm use 20.11.1
   nvm alias default 20.11.1
   ```

After installation, verify that everything works:

```bash
nvm --version
node --version
npm --version
```

You should see version numbers (for example `0.39.7`, `v20.11.1`, and `10.2.4`). If not, open a fresh terminal and run `nvm use default`.

## Step 3: Know Your Terminal

The terminal (or command prompt) is where you'll run Node.js scripts and developer tools.

- **Windows**: Use **PowerShell** or **Windows Terminal**.
- **macOS**: Use the built-in **Terminal** app.
- **Linux**: Use your default terminal emulator.

Create a folder to keep your JavaScript projects organized:

```bash
mkdir devsteps-js
cd devsteps-js
```

> Tip: Bookmark this folder in your file explorer so you can open it quickly from VS Code.

## Step 4: Configure VS Code for JavaScript

Inside VS Code:

1. Open your projects folder (`File` > `Open Folder`).
2. Enable **Auto Save** (`File` > `Auto Save`) so you don't lose work.
3. Turn on **Format on Save** (`Settings` > search for "format on save" > enable).
4. Install the extensions listed earlier if you haven't already.

Optional but helpful:
- Set the theme you like (`Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`).
- Adjust the font size and line height for comfortable reading.

## Step 5: Create a Test File

Let's make sure everything works end-to-end:

1. In VS Code, create a new file called `hello.js`.
2. Add the following code:

```javascript
console.log("Hello DevSteps!");
```

3. Save the file.
4. Run it from the terminal inside VS Code:

```bash
node hello.js
```

You should see `Hello DevSteps!` printed in the terminal.

## Step 6: Browser Developer Tools

Modern browsers ship with powerful developer tools. We'll use **Google Chrome**, but any Chromium-based browser works similarly.

1. Open Chrome and press `Ctrl+Shift+I` (`Cmd+Option+I` on macOS) to open DevTools.
2. Click the **Console** tab.
3. Type `console.log("Ready to code!");` and press Enter. You should see the message printed inside the console.

## Troubleshooting Checklist

- **Command not found** when running `node` or `npm`? Open a fresh terminal and run `nvm use default` (or `nvm use --lts`) so the correct version is active.
- **Permission errors** on macOS/Linux? Prefix commands with `sudo` only when installing software, not when running your code.
- **Extensions not working**? Reload VS Code by pressing `Ctrl+Shift+P`, typing `Developer: Reload Window`, and hitting Enter.

## Key Takeaways

- ✅ VS Code is our primary code editor.
- ✅ NVM makes it easy to install and switch Node.js versions while npm comes bundled with Node.
- ✅ The terminal is essential for running scripts and tools.
- ✅ Browser DevTools help you debug JavaScript in real time.

---

## 🎯 Quick Check

1. Which `nvm` commands would you run to install and activate the LTS version of Node.js?
2. How do you run a JavaScript file named `script.js` from the terminal?
3. Which VS Code extensions will help keep your JavaScript clean and readable?
4. How do you open the browser console in Chrome?

Answer these confidently, and you're ready for the next lesson: writing your first JavaScript program!

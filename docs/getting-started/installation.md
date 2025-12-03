# Installation Guide

This guide walks you through setting up a new Node.js project from scratch and installing Express.js. By the end of this guide, you'll have a fully configured project ready for building your HTTP server.

## Before You Begin

Make sure you have completed the [Prerequisites Guide](./prerequisites.md) and have:

- ✅ Node.js 22.x LTS installed
- ✅ npm 10.x available
- ✅ A code editor ready to use
- ✅ Terminal access configured

---

## Table of Contents

- [Project Initialization](#project-initialization)
- [Installing Express.js](#installing-expressjs)
- [Project Structure](#project-structure)
- [Creating the Application File](#creating-the-application-file)
- [Verification](#verification)
- [Next Steps](#next-steps)

---

## Project Initialization

### Step 1: Create the Project Directory

First, create a new directory for your project and navigate into it:

```bash
mkdir my-node-server && cd my-node-server
```

This creates a folder called `my-node-server` and changes your current directory to that folder.

### Step 2: Initialize npm Project

Initialize a new npm project by running:

```bash
npm init -y
```

The `-y` flag tells npm to use default values for all prompts, creating your `package.json` file instantly.

**Expected output:**

```json
Wrote to /path/to/my-node-server/package.json:

{
  "name": "my-node-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Understanding package.json

The `package.json` file is the heart of your Node.js project. It contains:

| Field | Description |
|-------|-------------|
| `name` | The name of your project (derived from folder name) |
| `version` | Current version of your project (starts at 1.0.0) |
| `description` | A brief description of your project |
| `main` | The entry point file for your application |
| `scripts` | Custom commands you can run with `npm run <script-name>` |
| `keywords` | Keywords for discoverability (if publishing to npm) |
| `author` | Your name or organization |
| `license` | The license under which your code is distributed |

---

## Installing Express.js

### Step 3: Install Express.js

Install Express.js version 5.2.1 as a project dependency:

```bash
npm install express@5.2.1
```

This command downloads Express.js and all its dependencies into the `node_modules` folder and updates your `package.json` to include Express as a dependency.

**Expected output:**

```
added 66 packages, and audited 67 packages in 3s

13 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

> **Note:** The exact number of packages may vary slightly based on Express.js updates and your npm version.

### Step 4: Verify Express.js Installation

Confirm that Express.js was installed correctly:

```bash
npm list express
```

**Expected output:**

```
my-node-server@1.0.0 /path/to/my-node-server
└── express@5.2.1
```

### What Gets Installed

When you install Express.js, npm also installs its dependencies automatically. Here are some key packages that Express.js 5.2.1 includes:

| Package | Purpose |
|---------|---------|
| `body-parser` | Middleware for parsing request bodies |
| `cookie` | Cookie parsing utilities |
| `debug` | Debugging utility for Node.js applications |
| `router` | HTTP request routing |
| `qs` | Query string parsing and stringifying |
| `finalhandler` | Final HTTP response handler |

### Updated package.json

After installing Express.js, your `package.json` will include a `dependencies` section:

```json
{
  "name": "my-node-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.2.1"
  }
}
```

The `^` (caret) before the version number means npm will accept minor and patch updates (e.g., 5.2.2, 5.3.0) while staying within the major version (5.x.x).

---

## Project Structure

After completing the installation steps, your project should have the following structure:

```
my-node-server/
├── package.json
├── package-lock.json
├── node_modules/
└── app.js (to be created)
```

### Understanding Each File and Folder

| File/Folder | Purpose |
|-------------|---------|
| `package.json` | Project configuration and dependency manifest |
| `package-lock.json` | Locks exact versions of all dependencies for reproducible installs |
| `node_modules/` | Contains all installed npm packages (don't edit manually) |
| `app.js` | Your application entry point (you'll create this next) |

### Important Notes

- **Never commit `node_modules/`**: This folder can be regenerated using `npm install` and should be added to `.gitignore`
- **Always commit `package-lock.json`**: This ensures consistent installations across different machines
- **The `app.js` file**: This is where your Express.js application code will live

---

## Creating the Application File

### Step 5: Create the app.js File

Create a new file called `app.js` in your project root. You can do this via your code editor or using the terminal:

```bash
touch app.js
```

On Windows (CMD), use:

```cmd
type nul > app.js
```

Or on Windows (PowerShell):

```powershell
New-Item -ItemType File -Name app.js
```

### Step 6: Add Express.js Boilerplate

Open `app.js` in your code editor and add the following starter code:

```javascript
// Import the Express.js framework
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port the server will listen on
// Uses the PORT environment variable if available, otherwise defaults to 3000
const PORT = process.env.PORT || 3000;

// Define a route for the root path "/"
// This handles GET requests to http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Understanding the Starter Code

Let's break down what each part of this code does:

| Code Section | Explanation |
|--------------|-------------|
| `const express = require('express')` | Imports the Express.js module |
| `const app = express()` | Creates an Express application instance |
| `const PORT = process.env.PORT \|\| 3000` | Sets the port from environment variable or defaults to 3000 |
| `app.get('/', ...)` | Defines a route handler for GET requests to "/" |
| `(req, res) => { ... }` | Arrow function that handles the request and response |
| `res.send('Hello world')` | Sends "Hello world" as the response |
| `app.listen(PORT, ...)` | Starts the server on the specified port |

---

## Verification

### Step 7: Verify Your Setup

Before continuing, let's make sure everything is set up correctly.

#### Check Project Files

Verify your project has all the required files:

```bash
ls -la
```

On Windows (CMD or PowerShell):

```cmd
dir
```

**Expected output should include:**

```
app.js
node_modules/
package-lock.json
package.json
```

#### Check package.json Dependencies

Verify Express.js is listed in your dependencies:

```bash
cat package.json
```

Or open `package.json` in your editor and confirm the `dependencies` section contains:

```json
"dependencies": {
  "express": "^5.2.1"
}
```

#### Test the Application

Run your application to verify it works:

```bash
node app.js
```

**Expected output:**

```
Server is running on http://localhost:3000
```

#### Test the Endpoint

Open a new terminal window (keep the server running) and test the endpoint:

```bash
curl http://localhost:3000/
```

Or open your web browser and navigate to: `http://localhost:3000/`

**Expected response:**

```
Hello world
```

#### Stop the Server

Press `Ctrl+C` in the terminal where your server is running to stop it.

### Verification Checklist

Use this checklist to confirm your setup is complete:

- [ ] **Project directory created** - `my-node-server` folder exists
- [ ] **npm initialized** - `package.json` file exists
- [ ] **Express.js installed** - Run `npm list express` shows `express@5.2.1`
- [ ] **app.js created** - File contains Express.js boilerplate code
- [ ] **Server starts successfully** - Running `node app.js` shows no errors
- [ ] **Endpoint responds** - Accessing `http://localhost:3000/` returns "Hello world"

---

## Next Steps

Congratulations! 🎉 You've successfully set up your Node.js project with Express.js. Your project is now ready for development.

**Where to go from here:**

| Next Step | Description |
|-----------|-------------|
| [Native HTTP Server Tutorial](../tutorials/native-http-server.md) | Learn how Node.js creates HTTP servers without Express (foundational knowledge) |
| [Express.js Setup Tutorial](../tutorials/express-setup.md) | Deep dive into Express.js configuration and middleware |
| [Adding Endpoints Tutorial](../tutorials/adding-endpoints.md) | Learn how to add more routes like the "Good evening" endpoint |

### Recommended Learning Path

For the best learning experience, we recommend following this order:

```
1. ➡️ Native HTTP Server Tutorial (understand the basics)
2. ➡️ Express.js Setup Tutorial (master the framework)
3. ➡️ Adding Endpoints Tutorial (build more features)
```

---

## Summary

In this installation guide, you accomplished:

1. ✅ Created a new project directory (`my-node-server`)
2. ✅ Initialized npm with `npm init -y`
3. ✅ Installed Express.js 5.2.1 with `npm install express@5.2.1`
4. ✅ Understood the project structure and key files
5. ✅ Created an `app.js` file with Express.js boilerplate
6. ✅ Verified the setup by running the application

Your project is now fully configured and ready for building your Node.js HTTP server!

---

## Troubleshooting

If you encountered any issues during installation, here are some common problems and solutions:

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| `npm: command not found` | Node.js not installed correctly | Revisit the [Prerequisites Guide](./prerequisites.md) |
| `EACCES: permission denied` | npm doesn't have write permissions | Use `sudo npm install` or fix npm permissions |
| `npm ERR! 404 Not Found` | Package name or version doesn't exist | Double-check the package name and version |
| `SyntaxError: Unexpected token` | JavaScript syntax error in app.js | Check for typos, missing commas, or brackets |
| `Error: Cannot find module 'express'` | Express not installed in project | Run `npm install express@5.2.1` in project directory |
| `EADDRINUSE: address already in use` | Port 3000 is already being used | Stop other servers or use a different port |

### Getting Help

If you're still having issues:

1. Check the [Node.js documentation](https://nodejs.org/docs/)
2. Check the [Express.js documentation](https://expressjs.com/)
3. Search for your error message online

---

*Last updated: December 2024*

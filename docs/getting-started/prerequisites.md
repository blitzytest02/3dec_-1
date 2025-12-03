# Prerequisites

Welcome to the Node.js Server Tutorial! Before diving into building your first server, you'll need to ensure your development environment is properly set up. This guide walks you through everything you need to have installed and configured before starting.

## Target Audience

This tutorial is designed for **beginner to intermediate developers** who want to learn how to build HTTP servers using Node.js and Express.js. Basic familiarity with JavaScript is helpful but not strictly required.

---

## Table of Contents

- [System Requirements](#system-requirements)
- [Node.js Installation](#nodejs-installation)
- [npm Verification](#npm-verification)
- [Development Environment](#development-environment)
- [IDE Recommendations](#ide-recommendations)
- [Verification Checklist](#verification-checklist)
- [Next Steps](#next-steps)

---

## System Requirements

Before installing Node.js, ensure your system meets the following requirements:

| Requirement | Specification |
|-------------|---------------|
| **Operating System** | Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+, Debian 10+, CentOS 7+) |
| **Terminal** | Bash, PowerShell, Command Prompt (CMD), or any terminal emulator |
| **Disk Space** | Minimum 500 MB free space for Node.js and npm packages |
| **Internet Connection** | Required for downloading Node.js and npm packages |
| **Architecture** | 64-bit (x64) or ARM64 processor |

### Operating System Support

Node.js provides excellent cross-platform support:

- **Windows**: Full support with native installer (.msi) or portable (.zip)
- **macOS**: Full support with native installer (.pkg) or via Homebrew
- **Linux**: Full support across major distributions with package managers or binary tarballs

---

## Node.js Installation

### Required Version

| Attribute | Value |
|-----------|-------|
| **Version** | Node.js 22.x LTS |
| **Codename** | "Jod" |
| **LTS Status** | Active Long Term Support (as of October 29, 2024) |
| **Support** | Maintained until April 2027 |

> **Why Node.js 22.x?** Express.js 5.x dropped support for Node.js versions before v18. Node.js 22.x LTS is the current recommended version, providing the latest features, security patches, and long-term stability.

### Installation Methods

#### Option 1: Direct Download (Recommended for Beginners)

1. Visit the official Node.js website: [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (22.x) for your operating system
3. Run the installer and follow the on-screen instructions
4. Accept the default installation options

#### Option 2: Using Node Version Manager (nvm) - Recommended for Developers

**nvm** allows you to install and manage multiple Node.js versions on your system.

**For macOS/Linux:**

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart your terminal or run:
source ~/.bashrc  # or ~/.zshrc for Zsh users

# Install Node.js 22.x LTS
nvm install 22

# Set Node.js 22 as the default version
nvm alias default 22

# Verify installation
nvm use 22
```

**For Windows:**

Download and install **nvm-windows** from: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

Then run in PowerShell or CMD:

```powershell
# Install Node.js 22.x LTS
nvm install 22

# Use Node.js 22
nvm use 22
```

### Verifying Node.js Installation

After installation, verify that Node.js is correctly installed by running:

```bash
node --version
```

**Expected output:**

```
v22.x.x
```

The version should start with `v22.` (for example, `v22.11.0` or higher).

If you see an error like `command not found` or the version is lower than 22.x, please revisit the installation steps or restart your terminal.

---

## npm Verification

### What is npm?

**npm** (Node Package Manager) is the default package manager for Node.js. It allows you to install, share, and manage JavaScript packages and dependencies for your projects. npm comes **bundled with Node.js**, so you don't need to install it separately.

### Required Version

| Attribute | Value |
|-----------|-------|
| **Version** | npm 10.x |
| **Included With** | Node.js 22.x LTS |
| **Purpose** | Package management for Node.js projects |

### Verifying npm Installation

Verify that npm is installed and accessible:

```bash
npm --version
```

**Expected output:**

```
10.x.x
```

The version should start with `10.` (for example, `10.8.2` or higher).

### Updating npm (If Needed)

If your npm version is outdated, you can update it using:

```bash
npm install -g npm@latest
```

> **Note:** On macOS/Linux, you may need to prefix with `sudo` if you encounter permission errors: `sudo npm install -g npm@latest`

---

## Development Environment

To follow this tutorial effectively, ensure you have the following set up:

### Terminal Access

You'll need access to a command-line interface (CLI) to run Node.js commands:

| Operating System | Recommended Terminal |
|------------------|---------------------|
| **Windows** | PowerShell, Windows Terminal, or Git Bash |
| **macOS** | Terminal.app or iTerm2 |
| **Linux** | GNOME Terminal, Konsole, or your distribution's default terminal |

### Basic Command Line Knowledge

You should be comfortable with basic terminal operations:

- Navigating directories (`cd`)
- Listing files (`ls` or `dir`)
- Creating directories (`mkdir`)
- Running commands with arguments

If you're new to the command line, consider reviewing a basic terminal tutorial before proceeding.

### Text Editor Requirements

You'll need a text editor capable of editing JavaScript files. Any plain text editor will work, but a code editor with syntax highlighting is strongly recommended.

---

## IDE Recommendations

While you can use any text editor, we recommend using a dedicated code editor or Integrated Development Environment (IDE) for the best experience.

### Visual Studio Code (Recommended)

**Visual Studio Code (VS Code)** is our top recommendation for Node.js development:

| Feature | Details |
|---------|---------|
| **Price** | Free and open-source |
| **Platforms** | Windows, macOS, Linux |
| **Download** | [https://code.visualstudio.com](https://code.visualstudio.com) |

**Key Features:**
- Excellent JavaScript/Node.js support out of the box
- Integrated terminal
- Git integration
- Extensive extension marketplace
- IntelliSense (code completion)
- Debugging support for Node.js

### Recommended VS Code Extensions

Install these extensions to enhance your Node.js development experience:

| Extension | Publisher | Purpose |
|-----------|-----------|---------|
| **ESLint** | Microsoft | JavaScript linting and code quality |
| **Prettier - Code formatter** | Prettier | Automatic code formatting |
| **Node.js Extension Pack** | Wade Anderson | Collection of Node.js tools |
| **JavaScript (ES6) code snippets** | charalampos karypidis | Helpful code snippets |
| **npm Intellisense** | Christian Kohler | Autocomplete for npm modules |

To install extensions in VS Code:
1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for the extension name
4. Click "Install"

### Alternative IDEs and Editors

If VS Code isn't your preference, here are other excellent options:

| Editor/IDE | Type | Platform | Cost |
|------------|------|----------|------|
| **WebStorm** | Full IDE | Cross-platform | Paid (free for students) |
| **Sublime Text** | Editor | Cross-platform | Freemium |
| **Vim/Neovim** | Editor | Cross-platform | Free |
| **Notepad++** | Editor | Windows | Free |

---

## Verification Checklist

Before proceeding to the next section, verify that all prerequisites are met. Use the checklist below:

### Quick Verification Commands

Run these commands in your terminal to verify your setup:

```bash
# Check Node.js version (should output v22.x.x)
node --version

# Check npm version (should output 10.x.x)
npm --version

# Verify Node.js is working correctly
node -e "console.log('Node.js is working!')"
```

**Expected outputs:**

```
v22.x.x
10.x.x
Node.js is working!
```

### Checklist

Use this checklist to ensure everything is ready:

- [ ] **Node.js 22.x LTS installed** - Run `node --version` and verify output starts with `v22.`
- [ ] **npm 10.x available** - Run `npm --version` and verify output starts with `10.`
- [ ] **Text editor/IDE installed** - VS Code or your preferred editor is ready to use
- [ ] **Terminal access working** - You can open a terminal and run commands
- [ ] **Basic JavaScript knowledge** - You understand variables, functions, and objects

### Troubleshooting Common Issues

| Issue | Solution |
|-------|----------|
| `node: command not found` | Restart your terminal or reinstall Node.js |
| Wrong Node.js version | Use nvm to install and switch to version 22 |
| Permission errors with npm | Use nvm or fix npm permissions (see npm docs) |
| PATH not configured | Add Node.js to your system PATH manually |

---

## Next Steps

Congratulations! If you've verified all the prerequisites above, you're ready to start building your Node.js server.

**Continue to the next guide:**

➡️ [Installation Guide](./installation.md) - Set up your project and install Express.js

---

## Summary

In this prerequisites guide, you've ensured that:

1. ✅ Your system meets the minimum requirements
2. ✅ Node.js 22.x LTS is installed
3. ✅ npm 10.x is available
4. ✅ You have a suitable code editor
5. ✅ Your terminal is configured and working

With these prerequisites in place, you're fully prepared to begin the Node.js Server Tutorial!

---

*Last updated: December 2024*

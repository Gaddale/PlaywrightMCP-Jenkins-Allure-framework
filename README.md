# 🎭 PlaywrightMCP

A smart Playwright automation assistant powered by GitHub Copilot — enabling rapid generation of web and API tests using natural language prompts.

---

## 📌 Pre-requisites

Ensure the following tools are set up:

1. ✅ **Visual Studio Code** (latest version recommended)
2. 🤖 **GitHub Copilot Extension**
3. 🧪 **Playwright** (install via `npm init playwright@latest`)
4. 🧩 **Playwright VS Code Extension** _(Optional)_

---

## ⚙️ Installation & Setup

1. **Install GitHub Copilot in VS Code**

   - Go to Extensions → Search “GitHub Copilot” → Install
   - Sign in with your GitHub account

2. **Clone & Setup PlaywrightMCP Project**
   ```bash
   git clone https://github.com/microsoft/playwright-mcp.git
   cd playwright-mcp
   npm install
   ```
3. **Launch the Playwright MCP Server**
   ```bash
   npm run start
   ```

## 💡 Sample Prompts to Try

Use the following prompts inside your GitHub Copilot chat or inline comments for code generation:

1. **UI Test Prompt:**
   Generate a Playwright test for the following scenario:

   - Navigate to http://www.automationpractice.pl/index.php
   - Search for 'Printed Dress'
   - Verify the "Printed" in the list

2. **Page Object Model (POM) Prompt:** Create a POM model for below steps:
   - Navigate to http://www.automationpractice.pl/index.php
   - Search for 'T-shirts'
   - Verify the "Faded Short Sleeve T-shirts" in the list
3. **API Test Prompt:** Generate a Playwright API test for the following scenario:
   - Define the API endpoint URL: 'https://fakestoreapi.com/products/1'.
   - Send a GET request to the endpoint.
   - Verify the response status as 200.
   - Validate the response contains these keys: id, title, price, category and description.
   - Optionally validate the data types using a JSON schema (Ajv).
   - Log the product title and price to the console.

## 🔗 References

1. [PlaywrightMCP GitHub Repo](https://github.com/microsoft/playwright-mcp)
2. [Playwright Documentation](https://playwright.dev/)
3. [GitHub Copilot Docs](https://docs.github.com/en/copilot)

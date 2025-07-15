# PlaywrightMCP-Jenkins-Allure-framework

This repository showcases an AI-powered Playwright test automation framework, built using GitHub Copilot (MCP) in Visual Studio Code. It follows the Page Object Model (POM) for scalability, integrates Allure Reports for rich and interactive test reporting, and supports Jenkins CI/CD pipelines for seamless automated execution and continuous feedback.

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
   git clone https://github.com/microsoft/playwrightmcp.git
   cd playwrightmcp
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

## Jenkins Setup with Docker

1. ```bash
   cd jenkins-playwright-setup
   ```
2. Build & Run Jenkins Container:
   ```bash
   docker build -t jenkins-playwright-custom .
   docker run -d --name jenkins-playwright -p 8080:8080 -p 50000:50000 jenkins-playwright-custom
   ```
3. Access Jenkins:
   Open http://localhost:8080 and install suggested plugins.
   ```
   docker exec jenkins-playwright cat /var/jenkins_home/secrets/initialAdminPassword
   ```

## 🛠 Step-by-Step Guide: Jenkins + Playwright + Allure Integration

1. Create Jenkinsfile to Your Local Project
2. Launch Jenkins and Install Required Jenkins Plugins
   Go to Manage Jenkins > Plugins and install: - NodeJS Plugin - Allure Jenkins Plugin - Pipeline Plugin (already available in most Jenkins installations)
3. Configure Tools in Jenkins, navigate to Manage Jenkins > Tool Configuration
   - Add a new NodeJS installation named: NodeJS 18 Enable “Install automatically”
   - Choose a version like 18.x or latest
   - Allure Commandline, Select "Install automatically" with version 2.34.1
4. Set Up Your Jenkins Project
   - Create a new pipeline job in Jenkins
   - Select Pipeline script from SCM
   - Choose Git and paste your GitHub repo URL
   - Make sure the branch is set to main (or whichever you're using)
5. Trigger Build
   - Once everything is configured: Click "Build Now"
   - Jenkins will: Clone the repo, Install dependencies, Run Playwright tests, Generate Allure results and Publish the report
6. View the Allure Report
   - After build finishes, go to the job → Allure Report link will appear in the left menu. View detailed reports with test steps, logs, attachments, and trends.

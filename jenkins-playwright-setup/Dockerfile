FROM jenkins/jenkins:lts

USER root

# Install dependencies for Playwright browsers
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libx11-6 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    libcairo2 \
    libpango-1.0-0 \
    libdbus-1-3 \
    libatspi2.0-0 \
    libxkbcommon0 \
    libxcb1 \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Install Playwright globally
RUN npm install -g playwright

# Install Playwright browser dependencies
RUN npx playwright install-deps

USER jenkins

# By default, Jenkins runs on port 8080
EXPOSE 8080

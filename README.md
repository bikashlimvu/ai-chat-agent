# AI Chat Agent

## Overview

AI Chat Agent is an advanced chat application leveraging OpenAI's GPT technology to provide intelligent conversational experiences. The application is built with a focus on simplicity and efficiency, designed to integrate seamlessly with various platforms.

## Features

- Interactive chat powered by OpenAI's API.
- Scalable architecture with Node.js and Bun support.
- Easy setup and configuration for quick deployment.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Version 20 or higher. [Download Node.js](https://nodejs.org/)
- **Bun**: Version 1.0.20 or higher. [Download Bun](https://bun.sh/)
- **Git**: Version control system to clone the repository. [Download Git](https://git-scm.com/)

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/bikashlimvu/ai-chat-agent.git
cd ai-chat-agent
```

---

## Install Dependencies

Install the necessary packages using npm or bun:

```bash
npm install
# or
bun install
```

---

## Running the Project

Start the application with one of the following commands:

```bash
npm start
# or
bun run index.ts
```

The application will start and be ready for use.

---

## OpenAI API Key Configuration

To use the OpenAI API, you need to set up your API key. Follow these steps:

### Step 1: Obtain Your API Key

1. Visit the [OpenAI API Key Settings page](https://platform.openai.com/settings/organization/api-keys).
2. Log in to your account.
3. Generate a new API key or copy an existing one.

---

### Step 2: Create a `.env` File

1. Navigate to the root directory of your project.
2. Create a new file named `.env`.
3. Add the following line to the `.env` file:

   ```bash
   OPENAI_API_KEY='YOUR_API_KEY'
   ```

Replace YOUR_API_KEY with the actual API key you obtained in Step 1.

Once configured, the application will automatically read the API key from the .env file to authenticate requests to the OpenAI API.

---

### Step 3: Secure Your API Key

To ensure the API key is not accidentally shared or exposed:

1. Add the .env file to .gitignore:

   ```bash
   echo ".env" >> .gitignore
   ```

Double-check that your .env file is not included in your version control system.

Always keep your API key private.

---

## Project Structure

The project is organized as follows:

```bash
ai-chat-agent/
├── index.ts           # Entry point for the application
├── package.json       # Project metadata and dependencies
├── src/               # Source code directory
├── types.ts           # List of types for Typescript
└── README.md          # Project documentation
```

---

## License

This project is licensed under the MIT License.

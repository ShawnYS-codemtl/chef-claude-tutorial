# chef-claude

A single-page web application that generates recipes based on the ingredients you have on hand, powered by Claude AI.

![screenshot](./chef-claude.png)

## 🚀 Features

- Enter a list of ingredients and receive a recipe suggestion from Claude AI.

- Dynamic frontend built with React:

    - State management

    - Conditional rendering

    - Forms

## 🛠️ Tech Stack

- Frontend: React, React State, React Forms

- Backend: Node.js, Express, CORS, dotenv

- API Integration: Anthropic Claude AI

## 🌐 Deployment
Deploying this project was a bit tricky due to the non-standard GitHub Pages setup and separate backend. Key points:

- Frontend: Served on GitHub Pages

    - The project is deployed from the gh-pages branch instead of the default main branch.

    - The React app required a custom base path (/chef-claude/) in vite.config.js so that all assets (JS/CSS) loaded correctly.

    - Ensured the homepage field in package.json matched the GitHub Pages URL (https://ShawnYS-codemtl.github.io/chef-claude/) to prevent broken links.

- Backend: Deployed on Render.com

    - Handles API requests securely using environment variables for secret keys.

    - Allows the frontend to fetch recipe data without exposing the Anthropic API key in the browser.
  
## 📝 Key Learnings

- Setting up a secure backend to handle API requests using environment variables.

- Integrating an external AI API (Anthropic Claude AI) with React frontend.

- Using modern React patterns for forms and state management.
  
- Learned how to configure React/Vite apps for GitHub Pages with a subdirectory.

- Understood the importance of separating frontend and backend deployment pipelines.

- Learned troubleshooting steps when deploying SPAs outside the root / or default branch.

## 🔗 Links

- Live Frontend: [GitHub Pages](https://shawnys-codemtl.github.io/chef-claude/)

- Backend API: [Render.com](https://chef-claude-tutorial.onrender.com)



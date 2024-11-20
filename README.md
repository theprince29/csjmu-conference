# CSJMU Conference Website

This repository contains the source code for the CSJMU Conference Website, a React-based web application designed to provide information about the conference, including committee details, important dates, submission guidelines, publications, and more.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- Dynamic routing using `react-router-dom`.
- Countdown timer using `react-countdown` for upcoming events.
- Interactive UI components with `@headlessui/react` and `@heroicons/react`.
- Sitemap generation for SEO using `vite-plugin-sitemap`.
- Fully responsive design styled with `TailwindCSS`.
- Lazy loading and transitions using `react-transition-group`.
- Optimized images and assets for fast loading.

## Technologies Used
- **Framework**: React
- **Bundler**: Vite
- **CSS Framework**: TailwindCSS
- **Plugins**: Vite plugins for React and sitemap generation
- **Icons**: Heroicons
- **Routing**: React Router
- **Deployment**: Vercel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/theprince29/csjmu-conference.git
   cd csjmu-conference
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the project in your browser:
   ```
   http://localhost:5173
   ```

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Lints the project using ESLint.

## Folder Structure
- **`public/`**: Contains static assets.
- **`src/`**: Source files for the React app.
  - **`components/`**: Reusable UI components.
  - **`pages/`**: Page components for routing.
  - **`assets/`**: Images, fonts, and other assets.
- **`tailwind.config.js`**: TailwindCSS configuration.
- **`vercel.json`**: Vercel deployment configuration.
- **`vite.config.js`**: Vite configuration with sitemap plugin.

## Deployment

The website is deployed on [Vercel](https://vercel.com). The deployment process is automated with Git integration, building the production version of the site with Vite.

**Production URL**: [CSJMU Conference](https://csjmu-conference.vercel.app)

## Contributing

We welcome contributions to improve this project! Follow these guidelines to ensure a smooth development process:

### Branch Naming Conventions
When creating a new branch, please follow the naming conventions below:

1. **For New Features**:  
   Branch name format: `new-feature/membername`  
   Example: `new-feature/john-doe`

2. **For Bug Fixes**:  
   Branch name format: `fix/membername`  
   Example: `fix/jane-doe`

3. **For Documentation Updates**:  
   Branch name format: `docs/membername`  
   Example: `docs/sam-smith`

4. **For Experimental Changes**:  
   Branch name format: `experimental/membername`  
   Example: `experimental/emma-brown`

### Contribution Workflow

1. **Fork the Repository**  
   Fork the repository to your own GitHub account and clone it locally:
   ```bash
   git clone https://github.com/theprince29/csjmu-conference.git
   cd csjmu-conference
   ```

2. **Create a Branch**  
   Create a new branch based on the naming conventions:
   ```bash
   git checkout -b new-feature/yourname
   ```

3. **Make Changes**  
   Add your new feature, bug fix, or update. Make sure to:
   - Write clear, concise, and meaningful commit messages.
   - Ensure the code passes linting (`npm run lint`) and is thoroughly tested.

4. **Commit and Push**  
   Commit your changes:
   ```bash
   git add .
   git commit -m "Brief description of your changes"
   git push origin new-feature/yourname
   ```

5. **Open a Pull Request (PR)**  
   - Go to the repository on GitHub.
   - Click the **Compare & Pull Request** button.
   - Provide a detailed description of your changes in the PR.
   - Assign reviewers if necessary.

6. **Code Review**  
   Your PR will be reviewed by the maintainers. Make sure to address any requested changes.

7. **Merge the PR**  
   Once approved, your PR will be merged into the main branch. 

### Code Style and Guidelines
- Follow the project's coding standards and ESLint rules.
- Use meaningful variable names and avoid hardcoding values unless necessary.
- Keep components modular and reusable.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```


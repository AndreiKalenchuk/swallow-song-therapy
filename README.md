# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment Flow (Netlify + GitHub Actions)

This project is automatically deployed to Netlify using GitHub Actions:

1. **GitHub Push / Pull Request**  
   Every time code is pushed or a pull request is merged to the `main` branch, GitHub Actions triggers the workflow.  

2. **Build with Vite**  
   - Node.js 20 is used to run the build.  
   - Dependencies are installed via `npm ci`.  
   - The app is built using `vite build`, outputting static files to `./dist`.  

3. **Deploy to Netlify**  
   - The workflow uses the `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` stored in GitHub Secrets.  
   - Built files in `./dist` are automatically deployed to your Netlify site.  
   - Netlify handles the production domain, DNS, and optional HTTPS certificates.  

4. **Result**  
   - The live site is updated automatically after each successful merge to `main`.  
   - Deployment status can be viewed in the GitHub Actions tab or Netlify dashboard.

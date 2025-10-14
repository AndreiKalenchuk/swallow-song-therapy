# React + Vite

## Deployment Flow (Netlify + GitHub Actions)

This project is automatically deployed to Netlify using GitHub Actions:

1. **GitHub Push / Pull Request**  
   Every time code is pushed or a pull request is merged to the `main` branch, GitHub Actions triggers the workflow.  

2. **Build with Vite**  
   - Node.js >=22.12.0 npm@latest is used to run the build.
   - Refer to .github/workflows/deploy.yml for GitHub Actions config.
   - The app is built using `vite build`, outputting static files to `./dist`.  

3. **Deploy to Netlify**  
   - The workflow uses the `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` stored in GitHub Secrets.  
   - Built files in `./dist` are automatically deployed to your Netlify site.  
   - Netlify handles the production domain, DNS, and optional HTTPS certificates.  

4. **Result**  
   - The live site is updated automatically after each successful merge to `main`.  
   - CI deployment takes about 1 min

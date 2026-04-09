# Project Deployment Guide

## GitHub Pages Deployment

### 1. Setup Package.json

Add this script to your `package.json`:

```json
{
  "scripts": {
    "deploy": "ng build --configuration production --base-href /portfolio/ && npx angular-cli-ghpages --dir=dist/portfolio"
  }
}
```

### 2. Deploy Command

Whenever you want to update the live site, run:

```bash
npm run deploy
```

### 3. Important Notes

- The deploy command automatically builds the project and pushes to the `gh-pages` branch
- **Remember to push your main branch changes first** before running deploy
- The `gh-pages` branch is used for GitHub Pages hosting
- The main/develop branch contains your source code

### 4. Deployment Process

1. Make changes to your code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. Run deployment:
   ```bash
   npm run deploy
   ```

### 5. Live Site

Your portfolio will be available at:
`https://nornazmi.github.io/portfolio/`

### 6. Troubleshooting

If deployment fails:
- Ensure you have `angular-cli-ghpages` installed: `npm install angular-cli-ghpages --save-dev`
- Check that your GitHub repository has `gh-pages` branch enabled for Pages
- Verify the `base-href` matches your repository name

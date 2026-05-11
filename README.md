# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

The site is deployed automatically to GitHub Pages and served at **https://aismithlab.com**.

**Auto-deploy on push.** Every push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm install && npm run build` and publishes the `dist/` output to the `gh-pages` branch via [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages). GitHub Pages then serves that branch.

```sh
git push origin main   # ~1–2 min later, changes are live
```

You can watch the deploy run under the repo's **Actions** tab.

**Manual one-off deploy** (only if Actions is broken):

```sh
npm run build
npx gh-pages -d dist
```

**Custom domain.** The site is served from `aismithlab.com`, configured by:

1. `public/CNAME` — written into the build so GitHub Pages knows the custom domain.
2. DNS — an `A`/`ALIAS` record for `aismithlab.com` pointing at GitHub Pages' IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
3. Repo **Settings → Pages** — source set to `Deploy from a branch` → `gh-pages` / `/ (root)`, with **Enforce HTTPS** enabled.

To use a different domain, edit `public/CNAME`, update the DNS records, and update the **Custom domain** field under Settings → Pages.

**Asset paths.** Reference public assets with a leading slash (e.g. `/photos/foo.png`, not `photos/foo.png`) so they resolve from the site root rather than the current route — relative paths break on sub-routes like `/people`.

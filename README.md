# Harshit Sahu | Portfolio

Personal portfolio website for Harshit Sahu, a fresher looking for Computer Operator, Data Entry Operator and IT technical support roles.

Built with plain HTML, CSS and JavaScript. No build step and no packages to install.

## Files

```
harshit-portfolio/
  index.html
  style.css
  script.js
  README.md
  assets/
    profile.jpg
    Harshit-Sahu-Resume.pdf
```

## Run it on your computer

Double-click `index.html`, or open it in any browser.

## Put it on GitHub

1. Sign in at github.com and click **New repository**.
2. Name it `harshit-portfolio` (or `harshit30sahu2005-blip.github.io` to get the shortest web address).
3. Leave it **Public** and do not add a README (this folder already has one). Click **Create repository**.
4. Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/harshit30sahu2005-blip/harshit-portfolio.git
git push -u origin main
```

If you named the repository `harshit30sahu2005-blip.github.io`, use that name in the `git remote add` line instead of `harshit-portfolio`.

## Publish it with GitHub Pages

1. Open the repository on GitHub and go to **Settings**, then **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.
4. Wait a minute or two. Your site will be at:
   - `https://harshit30sahu2005-blip.github.io/harshit-portfolio/`, or
   - `https://harshit30sahu2005-blip.github.io/` if you used the `.github.io` repository name.

## Update your resume or photo

Replace `assets/Harshit-Sahu-Resume.pdf` or `assets/profile.jpg` with the new file, keeping the same file name. Then run:

```bash
git add .
git commit -m "Update resume"
git push
```

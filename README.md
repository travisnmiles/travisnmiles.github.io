# Travis N. Miles — Academic Website

A plain HTML/CSS site (no build tools) for GitHub Pages.

```
index.html          Home: bio, honors, stats, research themes, recent articles
research.html       Research themes with selected papers and projects
publications.html   All publications (search + filter by type and topic)
presentations.html  Invited talks, conference presentations, lectures, sessions chaired
projects.html       Active and completed funded projects
404.html            "Page not found"
assets/css/style.css  All styling (edit colors at the top)
assets/js/main.js     Mobile menu + search/filter
assets/img/           Favicon; put headshot.jpg here
files/Miles_CV.pdf    Downloadable CV
```

## Publish on GitHub Pages (one time)

1. Sign in to GitHub and create a **new public repository** named exactly
   `travisnmiles.github.io`. Don't add a README.
2. On the new repo page choose **"uploading an existing file"**, then drag in everything in this
   folder **except** the `.docx` CV (the `.gitignore` also excludes it if you use git).
   Make sure `index.html` sits at the top level of the repo, not inside a subfolder.
3. Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment* pick **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**.
5. After a minute or two the site is live at `https://travisnmiles.github.io`.

Using git from a terminal instead:

```bash
cd academic_website
git init && git add . && git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/travisnmiles/travisnmiles.github.io.git
git push -u origin main
```

## Updating content

Each entry is a single `<li class="entry" ...>` line. To add one, copy an existing line and edit it:

```html
<li class="entry" data-type="journal" data-themes="hurricanes technology">
  <div class="cite">Author, A., <strong>Miles, T.N.</strong> (2027). Title. <em>Journal</em>. <a href="https://doi.org/10.xxxx/yyyy">10.xxxx/yyyy</a></div>
  <div class="meta"><span class="tag">Journal article</span></div>
</li>
```

- `data-type`: `journal`, `chapter` or `proceedings` (publications); `invited`, `conference`, `other` or `chaired` (presentations)
- `data-themes` (any combination): `hurricanes wind caribbean technology ecosystems polar`
- Add `<span class="tag status">Accepted</span>` for in-press work.

After changes, update the counts on the home page and the "Last updated" date in the footer.

**Headshot:** save a square photo as `assets/img/headshot.jpg` and follow the comment in `index.html`.

**Custom domain (optional):** Settings → Pages → Custom domain.

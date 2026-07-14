# Reyhana Nuri Syahfa — Portfolio Website

🔗 **Live site:** https://reyyhanaa.github.io

## Struktur
```
index.html   → struktur halaman
style.css    → semua styling & tema
script.js    → interaktivitas + data skills & projects
```

## Cara Deploy ke GitHub Pages

1. **Buat repository baru** di GitHub dengan nama PERSIS: `reyyhanaa.github.io`
   (nama repo = username + `.github.io` → ini yang bikin URL-nya jadi `https://reyyhanaa.github.io`).
   Set **Public**.

2. **Upload semua file** (`index.html`, `style.css`, `script.js`, `README.md`).
   - Cara paling mudah: di halaman repo klik **Add file → Upload files**, drag semua file, lalu **Commit changes**.
   - Atau lewat Git:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio site"
     git branch -M main
     git remote add origin https://github.com/reyyhanaa/reyyhanaa.github.io.git
     git push -u origin main
     ```

3. **Aktifkan GitHub Pages:** buka repo → **Settings → Pages** → bagian *Build and deployment* → Source: **Deploy from a branch** → Branch: **main** / **/(root)** → **Save**.

4. Tunggu ±1 menit, situs live di **https://reyyhanaa.github.io** 

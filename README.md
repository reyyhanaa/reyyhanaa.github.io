# Reyhana Nuri Syahfa — Portfolio Website

Website portfolio personal bertema **Data Analyst / Data Science**, dibuat dengan HTML, CSS, dan JavaScript murni (tanpa framework). Ringan, responsive, dan punya dark/light mode.

🔗 **Live site:** https://reyyhanaa.github.io

## ✨ Fitur
- Desain modern + gradient, responsive (HP & desktop)
- Dark / light mode (tersimpan di browser)
- Efek ketik (typing), animasi reveal saat scroll, animated counter
- Section: Hero, About, Skills, Projects, Contact
- Data project langsung dari repo GitHub

## 📁 Struktur
```
index.html   → struktur halaman
style.css    → semua styling & tema
script.js    → interaktivitas + data skills & projects
```

## 🚀 Cara Deploy ke GitHub Pages

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

4. Tunggu ±1 menit, situs live di **https://reyyhanaa.github.io** 🎉

## ✏️ Yang perlu kamu ubah
- **Email** di `index.html` (cari `your-email@example.com`)
- **LinkedIn** di `index.html` (cari `linkedin.com/in/your-username`)
- Tambah/ubah **skills** & **projects** di `script.js` (array `SKILLS` dan `PROJECTS`)

# Portofolio

React + Vite. Menu: Profil, Karya, Pengabdian.

## Jalankan lokal
    npm install
    npm run dev

## Isi konten
- Edit teks dan daftar di `src/data.js`
- Taruh foto/sertifikat di `public/images/`, lalu isi `gambar: '/images/nama-file.jpg'`
- Ganti warna aksen lewat `--accent` di `src/index.css`

## Deploy ke Netlify
Hubungkan repo ke Netlify. Pengaturan build sudah ada di `netlify.toml`
(build `npm run build`, publish `dist`). Atau jalankan `npm run build` lalu
seret folder `dist` ke Netlify Drop.

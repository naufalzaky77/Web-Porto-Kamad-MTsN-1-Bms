// Ganti semua isi di file ini dengan data kamu.
// Untuk foto/sertifikat: taruh file di folder public/images lalu isi misalnya gambar: '/images/sertifikat-1.jpg'
// Kalau gambar dikosongkan, akan tampil kotak placeholder.

export const profil = {
  nama: 'Nama Kamu',
  status: 'Terbuka untuk kolaborasi',
  peran: 'Profesi atau bidang kamu',
  tagline: 'Satu atau dua kalimat singkat tentang apa yang kamu kerjakan dan kenapa itu penting.',
  foto: '', // contoh: '/images/profil.jpg'
  bio: [
    'Paragraf pertama: ceritakan latar belakang dan perjalanan singkat kamu.',
    'Paragraf kedua: ceritakan apa yang sedang kamu dalami atau kerjakan sekarang.',
  ],
  info: [
    ['Pendidikan', 'Nama kampus / jurusan'],
    ['Fokus', 'Bidang utama kamu'],
    ['Kontak', 'email@contoh.com'],
  ],
  keahlian: ['Keahlian 1', 'Keahlian 2', 'Keahlian 3', 'Keahlian 4'],
}

export const karya = [
  { id: 1, judul: 'Nama Sertifikat 1', penerbit: 'Penerbit', tahun: 2025, kategori: 'Pelatihan', gambar: '', deskripsi: 'Keterangan singkat tentang sertifikat ini.' },
  { id: 2, judul: 'Nama Sertifikat 2', penerbit: 'Penerbit', tahun: 2025, kategori: 'Kompetensi', gambar: '', deskripsi: '' },
  { id: 3, judul: 'Nama Sertifikat 3', penerbit: 'Penerbit', tahun: 2024, kategori: 'Pelatihan', gambar: '', deskripsi: '' },
  { id: 4, judul: 'Nama Sertifikat 4', penerbit: 'Penerbit', tahun: 2024, kategori: 'Lomba', gambar: '', deskripsi: '' },
  { id: 5, judul: 'Nama Sertifikat 5', penerbit: 'Penerbit', tahun: 2023, kategori: 'Kompetensi', gambar: '', deskripsi: '' },
  { id: 6, judul: 'Nama Sertifikat 6', penerbit: 'Penerbit', tahun: 2023, kategori: 'Lomba', gambar: '', deskripsi: '' },
]

// rasio: bentuk foto di galeri, mis. '4/5' (tegak), '1/1' (kotak), '4/3' (mendatar)
export const pengabdian = [
  { id: 1, judul: 'Nama Kegiatan 1', tanggal: 'Jan 2025', lokasi: 'Lokasi', rasio: '4/5', gambar: '', deskripsi: 'Ceritakan singkat apa yang dilakukan di kegiatan ini.' },
  { id: 2, judul: 'Nama Kegiatan 2', tanggal: 'Mar 2025', lokasi: 'Lokasi', rasio: '1/1', gambar: '', deskripsi: '' },
  { id: 3, judul: 'Nama Kegiatan 3', tanggal: 'Mei 2025', lokasi: 'Lokasi', rasio: '4/3', gambar: '', deskripsi: '' },
  { id: 4, judul: 'Nama Kegiatan 4', tanggal: 'Jul 2024', lokasi: 'Lokasi', rasio: '3/4', gambar: '', deskripsi: '' },
  { id: 5, judul: 'Nama Kegiatan 5', tanggal: 'Sep 2024', lokasi: 'Lokasi', rasio: '4/3', gambar: '', deskripsi: '' },
  { id: 6, judul: 'Nama Kegiatan 6', tanggal: 'Nov 2024', lokasi: 'Lokasi', rasio: '4/5', gambar: '', deskripsi: '' },
]

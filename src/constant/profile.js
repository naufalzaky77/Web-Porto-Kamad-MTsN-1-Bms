// PROFIL PORTOFOLIO

import { size, weight } from "../style/wpanTheme";

import fotoProfil from "../asset/image/Foto_Profil.avif";

export const profile = {
  name: [
    {
      text: "H.",
      color: "text",
      weight: weight.bold,
      size: size.h1,
      spacing: "-0.1rem",
    },
    {
      text: "ALI NURDIN,",
      color: "primary",
      weight: weight.extraBold,
      size: size.h0,
      word: "1rem",
    },
    {
      text: "S.Ag., M.Pd.I.",
      color: "text",
      weight: weight.bold,
      size: size.h1,
      spacing: "-0.1rem",
      word: "1rem",
    },
  ],
  bio: [
    "Dilahirkan di Cilacap pada tanggal 12 Maret 1971. Saat ini aktif menjabat sebagai Kepala MTsN 1 Banyumas setelah sebelumnya memimpin di MTsN 3 Cilacap.",
    "Ali kecil mengenyam pendidikan di SD Islam Bojong Kawunganten dan lulus pada tahun 1982. Kemudian melanjutkan pendidikan di SMP Sultan Agung Kawunganten dan MAN Cilacap. Pada jenjang sarjana, beliau melanjutkan studi di IAIN Sunan Kalijaga Yogyakarta lalu melanjutkan studi magister di UNU Surakarta (studi Islam konsentrasi Magister Pendidikan Islam).",
    "Beliau adalah sosok yang memiliki jiwa leadership dan juga cinta dunia akademik terlihat dari beberapa piagam penghargaan yang telah diperoleh.",
  ],
  info: [
    { label: "Jabatan", value: "Kepala Madrasah" },
    { label: "Instansi", value: "MTs Negeri 1 Banyumas" },
    { label: "Surel", value: "kamadmtsnbanyumas@gmail.com" },
  ],
  photo: fotoProfil,
  email: "kamadmtsnbanyumas@gmail.com",
};

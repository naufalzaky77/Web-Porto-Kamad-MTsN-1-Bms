import { colors, size, weight } from "./wpanTheme";

// ------------------------ NAVBAR ---------------------------------
/**
 * STYLE BAGIAN KAPSUL BELAKANG NAVBAR
 */
export const navbarSx = {
  position: "fixed",
  top: "35px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  display: "flex",
  gap: "14px",
  p: "5px",
  borderRadius: "15px",
  background: colors.white,
  boxShadow: `2px 2px 30px 12px ${colors.black}20`,
  // --- LAYAR HP ---
  "@media (max-width: 900px)": {
    gap: "2px",
    top: "21px",
  },
};

/**
 * STYLE MENU ITEM NAVBAR
 */
export const navItemSx = {
  px: "21px",
  py: "7px",
  borderRadius: "10px",
  textDecoration: "none",
  fontSize: size.h4,
  fontWeight: weight.semiBold,
  color: colors.muted,
  transition: "background 0.2s, color 0.2s",
  "&:hover": { color: colors.primary },
  "&[aria-current]": {
    background: colors.primary,
    color: colors.white,
  },
  // --- LAYAR HP ---
  "@media (max-width: 900px)": {
    px: "14px",
    fontSize: size.h6,
  },
};
// --------------------------------------------------------------------

// ------------------------ HOME ---------------------------------
/**
 * STYLE UNTUK GRID KANAN KIRI HERO
 */
export const homeGridSx = {
  display: "grid",
  gridTemplateColumns: "1.20fr 0.80fr",
  // --- LAYAR HP ---
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
    pl: "28px",
  },
};

/**
 * STYLE WRAPPING+AKSEN FOTO HERO
 */
export const heroPhotoWrapSx = {
  position: "relative",
  isolation: "isolate",
  justifySelf: "center",
  width: "min(100%, 360px)",
  "&::before": {
    content: '""',
    position: "absolute",
    right: "-2rem",
    bottom: "-3rem",
    width: "70%",
    aspectRatio: "1",
    borderRadius: "50%",
    background: `${colors.primary}40`,
    zIndex: -1,
  },
  // --- LAYAR HP ---
  "@media (max-width: 900px)": {
    display: "none",
  },
};

/**
 * STYLE FOTO HERO
 */
export const heroPhotoSx = {
  display: "block",
  width: "100%",
  objectFit: "cover",
  objectPosition: "center -10%",
  transform: "scale(1.1)",
  aspectRatio: "3 / 4",
};

/**
 * STYLE TEKS DESKRIPSI HERO
 */
export const desTextSx = {
  fontSize: size.h4,
  textAlign: "justify",
  // --- LAYAR HP ---
  "@media (max-width: 900px)": {
    textAlign: "left",
  },
};

/**
 * STYLE GRID KHUSUS UNTUK INFO
 */
export const aboutGridSx = {
  display: "grid",
  gridTemplateColumns: "1.20fr 0.80fr",
  gap: "40px",
  // --- LAYAR HP ---
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
    gap: "30px", // Beri jarak saat ditumpuk
  },
};

/**
 * STYLE BARIS BAGIAN INFO
 */
export const aboutRowSx = {
  display: "flex",
  justifyContent: "space-between",
  py: "14px",
  borderBottom: `1px solid ${colors.black}15`,
};
// --------------------------------------------------------------------

// ------------------------ KARYA ---------------------------------
/**
 * STYLE GRID KARTU 3 KOLOM
 */
export const karyaGridSx = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "35px",
  // --- LAYAR TAB ---
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  // --- LAYAR HP ---
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
  },
};

/**
 * STYLE WRAPPER KARTU
 */
export const imageCardSx = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  textAlign: "left",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
  },
  "&:hover img": {
    boxShadow: `0 18px 40px ${colors.black}30`,
  },
};

/**
 * STYLE GAMBAR KARTU
 */
export const imageCardImgSx = {
  display: "block",
  width: "100%",
  aspectRatio: "4 / 3",
  objectFit: "cover",
  transition: "box-shadow 0.3s ease",
};

/**
 * STYLE JUDUL KARTU
 */
export const imageCardTitleSx = {
  fontSize: `clamp(${size.h5}, 4vw, ${size.h3})`,
  fontWeight: weight.bold,
  color: colors.primary,
};

/**
 * STYLE SUBTITLE KARTU (LINE 2)
 */
export const imageCardSubSx = {
  fontSize: `clamp(${size.h6}, 3vw, ${size.h4})`,
  fontWeight: weight.medium,
  color: colors.text,
};

/**
 * STYLE SUBTITLE KARTU (LINE 3)
 */
export const imageCardDateSx = {
  fontSize: size.h5,
  fontWeight: weight.regular,
  color: colors.muted,
};
// --------------------------------------------------------------------

// ------------------------ PENGABDIAN ---------------------------------
/**
 * STYLE MASONRY GRID
 */
export const pengabdianGridSx = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "35px",
  alignItems: "start",
  // --- LAYAR TAB ---
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  // --- LAYAR HP ---
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
  },
};

/**
 * STYLE MASONRY CARD
 */
export const imageCardImgMasonrySx = {
  display: "block",
  width: "100%",
  height: "auto",
  transition: "box-shadow 0.3s ease",
};
// --------------------------------------------------------------------

// ------------------------ PAGE REUSEABLE ---------------------------------
/**
 * STYLE JUDUL HALAMAN
 */
export const pageTitleSx = {
  fontSize: `clamp(${size.h2}, 6vw, ${size.h0})`,
  fontWeight: weight.bold,
  color: colors.primary,
  mb: "42px",
};
// --------------------------------------------------------------------

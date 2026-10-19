import { colors, size, weight } from "./wpanTheme";

// ------------------------ NAVBAR ---------------------------------
/**
 * STYLE BAGIAN KAPSUL BELAKANG NAVBAR
 */
export const navbarSx = {
  position: "fixed",
  top: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  display: "flex",
  gap: "14px",
  p: "5px",
  borderRadius: "15px",
  background: colors.white,
  boxShadow: `2px 2px 30px 12px ${colors.black}20`,
};

/**
 * STYLE MENU ITEM NAVBAR
 */
export const navItemSx = {
  px: "21px",
  py: "7px",
  borderRadius: "10px",
  textDecoration: "none",
  fontSize: size.h22,
  fontWeight: weight.semiBold,
  color: colors.muted,
  transition: "background 0.2s, color 0.2s",
  "&:hover": { color: colors.primary },
  "&[aria-current]": {
    background: colors.primary,
    color: colors.white,
  },
};
// --------------------------------------------------------------------

// ------------------------ HOME ---------------------------------
/**
 * STYLE UNTUK GRID KANAN KIRI
 */
export const homeGridSx = {
  display: "grid",
  gridTemplateColumns: "1.25fr 0.75fr",
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
};

/**
 * STYLE WRAPPER KARTU
 */
export const imageCardSx = {
  display: "block",
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
  fontSize: size.h3,
  fontWeight: weight.bold,
  color: colors.primary,
};

/**
 * STYLE SUBTITLE KARTU (LINE 2)
 */
export const imageCardSubSx = {
  fontSize: size.h4,
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
 * STYLE MASONRY CARD
 */
export const imagecardImgMasonrySx = {
  display: "block",
  width: "100%",
  height: "auto",
  transition: "box-shadow 0.3s ease",
};

/**
 * STYLE MASONRY GRID
 */
export const pengabdianGridSx = {
  columns: "3 260px",
  columnGap: "1.25rem",
};
// --------------------------------------------------------------------

// ------------------------ PAGE REUSEABLE ---------------------------------
/**
 * STYLE JUDUL HALAMAN
 */
export const pageTitleSx = {
  fontSize: size.h0,
  fontWeight: weight.bold,
  color: colors.primary,
  mb: "42px",
};
// --------------------------------------------------------------------

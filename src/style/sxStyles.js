import { colors, size, weight } from "./wpanTheme";

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

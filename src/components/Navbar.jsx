// NAVBAR (BAGIAN ATAS)

import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

import { colors, size, weight } from "../style/wpanTheme";

const navItemSx = {
  px: "1.1rem",
  py: "0.5rem",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: weight.medium,
  fontSize: "0.95rem",
  color: colors.muted,
  transition: "background 0.2s, color 0.2s",
  "&:hover": { color: colors.text },
  "&[aria-current]": {
    background: colors.primary,
    color: colors.white,
  },
};

export default function Navbar() {
  return (
    <Box
      component="nav"
      aria-label="Navigasi utama"
      sx={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        display: "flex",
        gap: "0.25rem",
        p: "0.35rem",
        borderRadius: "999px",
        background: "rgba(255,255,255,.78)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${colors.background}`,
        boxShadow: "0 8px 30px rgba(30,40,120,.08)",
      }}
    >
      <Box component={NavLink} to="/" end sx={navItemSx}>
        Beranda
      </Box>
      <Box component={NavLink} to="/karya" sx={navItemSx}>
        Karya
      </Box>
      <Box component={NavLink} to="/pengabdian" sx={navItemSx}>
        Pengabdian
      </Box>
    </Box>
  );
}

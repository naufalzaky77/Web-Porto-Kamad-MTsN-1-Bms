// WRAPPER LAYOUT KESELURUHAN

import { Box } from "@mui/material";

import Navbar from "./Navbar";
import { useScrollToTop } from "../hook/useScrollToTop";
import { colors, size, weight } from "../style/wpanTheme";

export default function Layout({ children }) {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          width: "min(1120px, 100% - 2.5rem)",
          mx: "auto",
          pt: "7.5rem",
          pb: "4rem",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          width: "min(1120px, 100% - 2.5rem)",
          mx: "auto",
          py: "2rem",
          color: colors.muted,
          fontSize: "0.9rem",
          borderTop: `1px solid ${colors.background}`,
        }}
      >
        © {new Date().getFullYear()} Alinur
      </Box>
    </>
  );
}
